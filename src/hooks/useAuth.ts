import { auth, db, GoogleProvider } from "@/services/firebase";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import {
	doc,
	DocumentData,
	getDoc,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function useAuth() {
	const [user] = useAuthState(auth);
	const [userInfo, setUserInfo] = useState<DocumentData | undefined>(
		undefined
	);

	const login = async () => {
		try {
			await signInWithRedirect(auth, GoogleProvider);
			const res = await getRedirectResult(auth);
			if (res) {
				// before making a new doc, check if doc already exists to prevent updating the old doc
				const docRef = doc(db, "users", res.user.uid);
				const docSnap = await getDoc(docRef);
				if (!docSnap.exists()) {
					await setDoc(doc(db, "users", res.user.uid), {
						uid: res.user.uid,
						email: res.user.email,
						displayName: res.user.displayName,
						profilePic: res.user.photoURL,
						avatarId: 1,
					});
				}
			} else {
				throw new Error("Redirect result is null.");
			}
		} catch (error) {
			console.error("Error signing in with Google: ", error);
		}
	};

	const logout = async () => {
		try {
			await auth.signOut();
		} catch (error) {
			console.error("Error signing out: ", error);
		}
	};

	const getUserData = async (uid: string) => {
		const docRef = doc(db, "users", uid);
		const docSnap = await getDoc(docRef);
		return docSnap.data();
	};

	useEffect(() => {
		// declare the data fetching function
		const fetchUserData = async () => {
			if (user) {
				try {
					const docData = await getUserData(user.uid);
					setUserInfo(docData);
				} catch (err) {
					console.error("Failed to load user data.");
				}
			}
		};

		fetchUserData().catch(console.error);
	}, [user]);

	const updateUserData = async (obj: object) => {
		try {
			if (user) {
				const docRef = doc(db, "users", user.uid);
				await updateDoc(docRef, obj);
			}
		} catch (err) {
			console.error("Failed to update user data.");
		}
	};

	return { user, userInfo, login, logout, updateUserData };
}
