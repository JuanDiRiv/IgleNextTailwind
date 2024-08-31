import { useEffect, useState } from 'react';
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

function VideoPost() {
    const [user] = useAuthState(auth) as unknown as [CustomUser | null];
    const router = useRouter();

    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [meetingDateTime, setMeetingDateTime] = useState('');
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const userSession = typeof window !== 'undefined' ? sessionStorage.getItem('accessToken') : null;
        const token = sessionStorage.getItem('accessToken');
        if (!user && !token) {
            router.push('/signIn');
        }
    }, [user, router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ link, title, description, meetingDateTime, isLive });
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Admin VideoPost</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded shadow-md">
                    <div className="mb-4">
                        <label htmlFor="link" className="block text-gray-700 text-sm font-bold mb-2">
                            Video Link
                        </label>
                        <input
                            type="text"
                            id="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter video link"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter title"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter description"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="meetingDateTime" className="block text-gray-700 text-sm font-bold mb-2">
                            Meeting Date and Time
                        </label>
                        <input
                            type="datetime-local"
                            id="meetingDateTime"
                            value={meetingDateTime}
                            onChange={(e) => setMeetingDateTime(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="isLive" className="block text-gray-700 text-sm font-bold mb-2">
                            ¿Estamos en directo?
                        </label>
                        <input
                            type="checkbox"
                            id="isLive"
                            checked={isLive}
                            onChange={(e) => setIsLive(e.target.checked)}
                            className="mr-2 leading-tight"
                        />
                        <span className="text-sm">Sí</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Post Video
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default VideoPost;



//<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Frioscajica%2Fvideos%2F3741656622719396%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>