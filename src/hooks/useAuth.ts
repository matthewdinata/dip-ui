import { auth, db, GoogleProvider } from "@/services/firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import {
	doc,
	DocumentData,
	getDoc,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
	const [user, loading] = useAuthState(auth);
	const [userInfo, setUserInfo] = useState<DocumentData | undefined>(
		undefined
	);
	const navigate = useNavigate();

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

			onAuthStateChanged(auth, (user) => {
				if (user) {
					navigate("/dashboard");
				} else {
					throw new Error("Auth state change encounters an error.");
				}
			});
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

	return { user, userInfo, login, logout, updateUserData, loading };
}
