import React, { useEffect } from 'react';
import { auth } from '@/utils/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function Admin() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  // console.log(user);
  

  useEffect(() => {
    const userSession = typeof window !== 'undefined' ? sessionStorage.getItem('user') : null;

    if (!user && !userSession) {
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