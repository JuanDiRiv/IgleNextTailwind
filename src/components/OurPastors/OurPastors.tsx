import Image from 'next/image';
import React from 'react';

function OurPastors() {
    return (
        <>
            <div className='text-center'>
                <h2 className='text-2xl lg:text-4xl font-bold'>Nuestros Pastores</h2>
                <p className='pt-4 font-light lg:text-lg'>Get to know our leaders</p>
            </div>

            <div className='pt-6 flex flex-col justify-center items-center md:items-start md:flex-row gap-6 md:text-left md:pt-20'>
                <div className='w-72 h-72 relative shadow-lg border-4 border-white'>
                    <Image
                        className='object-cover'
                        src={"https://hosting.renderforestsites.com/images/5699226/135134/95b4d624642a30e9b738fed7d1416ebb.jpg"}
                        layout="fill"
                        alt='Pastor 1'
                    />
                </div>
                <div className='w-[90%] md:w-[50%]'>
                    <h3 className='text-xl font-bold pt-4 md:pt-0'>Pastores</h3>
                    <p className='font-light'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis 
                    </p>
                </div>
            </div>
        </>
    );
}

export default OurPastors;