import { auth, db, GoogleProvider } from "@/services/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, DocumentData, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function useAuth() {
	const [user] = useAuthState(auth);
	const [userInfo, setUserInfo] = useState<DocumentData | undefined>(
		undefined
	);

	const login = async () => {
		try {
			const res = await signInWithPopup(auth, GoogleProvider);
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

	return { user, userInfo, login, logout };
}
