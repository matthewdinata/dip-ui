import { auth, GoogleProvider } from '@/services/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

// TODO: fix linting problems

export default function Landing() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <>
      <div>
        {user ? (
          <div>
            <div className='mb-12'>
              <div className='text-5xl font-semibold mb-2'>
                Hello, {user?.displayName}
              </div>
              <div className='text-xl italic'>
                You logged in using{' '}
                <span className='text-emerald-700'>{user.email}</span>
              </div>
            </div>
            <button onClick={handleLogout}>LOG OUT</button>
          </div>
        ) : (
          <div>
            <div className='mb-8 text-5xl font-semibold'>
              Welcome to our Super App!
            </div>
            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
          </div>
        )}
      </div>
    </>
  );
}
