import './App.css';

import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, GoogleProvider } from './services/firebase';

// Google sign in method
const handleClick = async (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  e.preventDefault();

  try {
    const res = await signInWithPopup(auth, GoogleProvider);

    // before making a new doc, check if doc already exists to prevent updating the old doc
    const docRef = doc(db, 'users', res.user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, 'users', res.user.uid), {
        uid: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName,
        profilePic: res.user.photoURL,
        bio: '',
      });
    }
  } catch (error) {
    // TODO: catch error
  }
};

function App() {
  return (
    <>
      <h1>DIP E028</h1>
      <div className='card'>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <button onClick={handleClick}>REGISTER WITH GOOGLE</button>
        <p className='mt-4'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
