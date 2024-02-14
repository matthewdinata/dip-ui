import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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
      <div>
        <a
          href='https://vitejs.dev'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://react.dev'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>DIP E028</h1>
      <div className='card'>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <button onClick={handleClick}>REGISTER WITH GOOGLE</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
