import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase/config';
import { User } from 'firebase/auth'; // Adjust the import according to your setup
import { signOut } from 'firebase/auth';
import Layout from '@/components/layout/Layout';

// Extend the User type to include stsTokenManager
interface CustomUser extends User {
  stsTokenManager: {
    accessToken: string;
  };
}

function Dashboard() {
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
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
        
      </div>
    </Layout>
  );
}

export default Dashboard;