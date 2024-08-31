import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase/config';
import {  User } from 'firebase/auth'; // Adjust the import according to your setup
import { signOut } from 'firebase/auth';

// Extend the User type to include stsTokenManager
interface CustomUser extends User {
  stsTokenManager: {
    accessToken: string;
  };
}

function Admin() {
  const [user] = useAuthState(auth) as unknown as [CustomUser | null];
  const router = useRouter();

  useEffect(() => {
    const userSession = typeof window !== 'undefined' ? sessionStorage.getItem('accessToken') : null;
    const token = sessionStorage.getItem('accessToken');
    if (!user && !token) {
      router.push('/signIn');
    }
  }, [user, router]);

  return (
    <div>
      <button
        onClick={() => {
          signOut(auth);
          if (typeof window !== 'undefined') {
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('accessToken');
          }
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default Admin;