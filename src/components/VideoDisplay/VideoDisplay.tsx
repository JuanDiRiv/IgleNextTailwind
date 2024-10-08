import { Clock, Navigation } from '@geist-ui/icons';
import Link from 'next/link';
import React, { useEffect, useCallback, useMemo } from 'react';
import { CiClock1 } from "react-icons/ci";
import { LiaPlaceOfWorshipSolid } from "react-icons/lia";
import { db } from '@/utils/firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';



interface VideoData {
  id: string;
  link: string;
  title: string;
  description: string;
  meetingDateTime: string;
  isLive: boolean;
}

function useFetchVideos() {
  const [videoList, setVideoList] = React.useState<VideoData[]>([]);

  const fetchVideos = useCallback(async () => {
    const q = query(collection(db, "VideoTransmition"), orderBy("id"));
    const querySnapshot = await getDocs(q);
    const videoList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as VideoData));
    setVideoList(videoList);
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return videoList;
}

function VideoDisplay() {
  const videoList = useFetchVideos();

  const lastVideo = useMemo(() => videoList[videoList.length - 1], [videoList]);

  const { day, month } = useMemo(() => {
    if (!lastVideo?.meetingDateTime) return { day: '', month: '' };
    const dateObj = new Date(lastVideo.meetingDateTime);
    const day = dateObj.getDate().toString().padStart(2, '0');
    let month = dateObj.toLocaleString('default', { month: 'short' });
    month = month.charAt(0).toUpperCase() + month.slice(1);
    return { day, month };
  }, [lastVideo]);

  return (
    <div className='flex flex-col lg:flex-row bg-black border rounded-lg shadow-lg overflow-hidden relative'>
      <div className='flex-1 flex items-center justify-center'>
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
          <iframe
            title='video'
            src={lastVideo?.link}
            className='absolute top-0 left-0 w-full h-full border-none overflow-hidden'
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className='flex-1 p-8 bg-white relative'>
        <h2 className='font-bold mb-4 text-2xl'>{lastVideo?.title}</h2>
        <p className='text-left font-light mb-6 '>{lastVideo?.description}</p>
        <div className='font-light'>
          <div className='flex items-center gap-2 mt-4'>
            <CiClock1 className='flex-shrink-0 w-6 h-6 text-gray-600' />
            <p className='text-gray-700'>Domingo 10:00am</p>
          </div>
          <div className='flex items-center gap-2 mt-4'>
            <LiaPlaceOfWorshipSolid className='flex-shrink-0 w-6 h-6 text-gray-600' />
            <p className='text-gray-700'>Centro Comercial Sexta, Cl. 5a #6-57, Cajicá, Cundinamarca</p>
          </div>
        </div>
        <div className='w-full text-center mt-6'>
          <Link href="https://www.facebook.com/rioscajica" legacyBehavior>
            <a className='inline-block bg-customGold text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors duration-300'>
              Ver Transmisión
            </a>
          </Link>
        </div>
        <div className='bg-customGold rounded-full w-16 h-16 absolute top-0 right-0 flex flex-col items-center justify-center text-white font-bold mt-2 mr-2 '>
          <p className='text-lg leading-none'>{day}</p>
          <p className='text-sm leading-none'>{month}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDisplay;