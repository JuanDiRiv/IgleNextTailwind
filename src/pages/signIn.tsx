import { useEffect } from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase/config';
import { useRouter } from 'next/navigation';
import { User } from 'firebase/auth';
import { ClipLoader } from 'react-spinners';

const SignIn = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    loading: false,
    error: null as string | null,
  });

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const [userToken , setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      setUserToken(accessToken);
     
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignIn = async () => {
    setFormState((prevState) => ({ ...prevState, loading: true, error: null }));
    try {
      const res = await signInWithEmailAndPassword(formState.email, formState.password);
      const user = res?.user as User & { stsTokenManager?: { accessToken: string } };
      if (user?.stsTokenManager?.accessToken) {
        sessionStorage.setItem('accessToken', user.stsTokenManager.accessToken);
        setFormState({ email: '', password: '', loading: false, error: null });
        setTimeout(() => router.push('/admin'), 1000);
      } else {
        setTimeout(() => setFormState((prevState) => ({ ...prevState, error: 'Failed to sign in. Please check your credentials and try again.' })), 1000);
      }
    } catch (e) {
      console.error(e);
      setFormState((prevState) => ({ ...prevState, error: 'Failed to sign in. Please check your credentials and try again.' }));
    } finally {
      setTimeout(() => setFormState((prevState) => ({ ...prevState, loading: false })), 1000);
    }
  };

  return (
  <>

  {
    !userToken ? 
    <div className="min-h-screen flex items-center justify-center bg-greenDark">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign In</h1>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="mb-4 p-2 w-full"
        />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="mb-4 p-2 w-full"
        />
        <button
          onClick={handleSignIn}
          className="bg-blue-500 text-white p-2 w-full rounded"
          disabled={formState.loading}
        >
          {formState.loading ? 'Signing In...' : 'Sign In'}
        </button>
        {formState.loading && (
          <div className="flex justify-center mt-4">
            <ClipLoader color="#ffffff" loading={formState.loading} size={35} />
          </div>
        )}
        {formState.error && (
          <div className="text-red-500 mt-4">
            {formState.error}
          </div>
        )}
      </div>
    </div>
    : 
    <div className="min-h-screen flex items-center justify-center bg-greenDark text-center">
      <div className="bg-gray-800 p-11 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl ">Ya Iniciaste sesion </h1>
       
      </div>
    </div>
  }
    
    </>
  );
};

export default SignIn;