import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/utils/firebase/config';
import { User } from 'firebase/auth'; // Adjust the import according to your setup
import { signOut } from 'firebase/auth';
import Layout from '@/components/layout/Layout';
import { addDoc, collection, getDocs } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';

// Extend the User type to include stsTokenManager
interface CustomUser extends User {
    stsTokenManager: {
        accessToken: string;
    };
}
interface VideoData {
    id: string;
    link: string;
    title: string;
    description: string;
    meetingDateTime: string;
    isLive: boolean;
}

function VideoPost() {
    const [user] = useAuthState(auth) as unknown as [CustomUser | null];
    const router = useRouter();
    const [confirmationMessage, setConfirmationMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [meetingDateTime, setMeetingDateTime] = useState('');
    const [isLive, setIsLive] = useState(false);
    const [newVideo, setNewVideo] = useState(null);
    const [videoList, setVideoList] = useState<VideoData[]>([]);

    const createVideo = async (video: any) => {
        setLoading(true);
        try {
            await addDoc(collection(db, 'VideoTransmition'), video);
            setNewVideo(video);
            setConfirmationMessage('El Video se ha creado correctamente');
            toast.success('El Video se ha creado correctamente');
            resetForm();

            // Hide the confirmation message and image after 3 seconds
            setTimeout(() => {
                setConfirmationMessage("");
                setNewVideo(null);
            }, 3000);
        } catch (error: any) {
            if (error.code === 'permission-denied') {
                setConfirmationMessage('Error: Permisos insuficientes para crear el video.');
                toast.error('Error: Permisos insuficientes para crear el video.');
            } else {
                setConfirmationMessage('Error creando el video: ' + error.message);
                toast.error('Error creando el video: ' + error.message);
            }
            console.error('Error creando el video: ', error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setLink('');
        setTitle('');
        setDescription('');
        setMeetingDateTime('');
        setIsLive(false);
    }

    useEffect(() => {
        const fetchVideos = async () => {
            const querySnapshot = await getDocs(collection(db, "VideoTransmition"));
            const videoList = querySnapshot.docs.map(doc => doc.data() as VideoData);
            setVideoList(videoList);
            
            
        };
        fetchVideos();
    }, [videoList]);

    useEffect(() => {
        const userSession = typeof window !== 'undefined' ? sessionStorage.getItem('accessToken') : null;
        const token = sessionStorage.getItem('accessToken');
        if (!user && !token) {
            router.push('/signIn');
        }
    }, [user, router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const srcMatch = link.match(/src="([^"]+)"/);
        const srcValue = srcMatch ? srcMatch[1] : '';
        const normalizedData = {
            id: videoList.length + 1,
            link: srcValue,
            title,
            description,
            meetingDateTime,
            isLive
        }
        createVideo(normalizedData);
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 relative">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Admin VideoPost</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded shadow-md relative">
                    {loading && (
                        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
                            <div className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                        </div>
                    )}
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
                <Toaster />
            </div>
        </Layout>
    );
}

export default VideoPost;