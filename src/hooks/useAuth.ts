import { auth, db, GoogleProvider } from "@/services/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function useAuth() {
	const [user] = useAuthState(auth);

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

	return { user, login, logout };
}
