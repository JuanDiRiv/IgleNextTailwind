import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase/config';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaHome, FaUser, FaCog, FaVideo } from 'react-icons/fa';

const Layout = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('accessToken');
    }
    router.push('/signIn');
  };

  return (
    <div className="flex h-full">
      <aside className={`bg-gray-800 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex items-center justify-between p-4">
          <span className={`text-xl font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboard</span>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
            {isSidebarOpen ? '<' : '>'}
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <Link href="/admin/dashboard" className="flex items-center w-full">
                <FaHome className="text-2xl" />
                <span className={`ml-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboard</span>
              </Link>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <Link href="/admin/videoPost" className="flex items-center w-full">
                <FaVideo className="text-2xl" />
                <span className={`ml-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>Publicar video</span>
              </Link>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <Link href="/profile" className="flex items-center w-full">
                <FaUser className="text-2xl" />
                <span className={`ml-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>Profile</span>
              </Link>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <Link href="/settings" className="flex items-center w-full">
                <FaCog className="text-2xl" />
                <span className={`ml-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-grow">
        <header className="flex justify-end p-4 bg-gray-100">
          <div className="flex items-center">
            {user ? (
              <>
                <span className="mr-4">{user.displayName}</span>
                <button onClick={handleSignOut} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                  Log out
                </button>
              </>
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;