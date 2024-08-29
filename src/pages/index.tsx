import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import VideoDisplay from '@/components/VideoDisplay/VideoDisplay'
import Head from 'next/head'
import About from '@/components/About/About'
import VerseReference from '@/components/VerseReference/VerseReference'
import ChurchCommunity from '@/components/ChurchCommunity/ChurchCommunity'
import OurPastors from '@/components/OurPastors/OurPastors'
import Location from '@/components/Location/Location'


function Home() {
  const url = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Frioscajica%2Fvideos%2F505356845192472%2F&show_text=false&width=560&t=0"
  return (
    <>
      <Head>
        <title> Rios Cajica - Home</title>
      </Head>
      <header className='bg-[url("https://hosting.renderforestsites.com/images/5699226/135134/284fbfc4cc2e05fb0fe23adc053ac610.jpg")] bg-center bg-cover  '>
        {/* Contenido del header */}
        <Navbar />
        <div className='pt-12 lg:pt-0'>
          <div className=''>
            <div className='p-12'>
              <div className='flex flex-col items-center justify-center h-full text-white lg:w-5/12 md:w-80 lg:p-16'>
                <h1 className='text-5xl font-bold pb-4 lg:pb-4 lg:text-8xl'>THE WORD OF GOD</h1>
                <div className='w-full h-1 bg-white size mt-1 mb-3' />
                <p className='text-lg pb-6 font-light '>Dear friends, now we are children of God, and what we will be has not yet been made known. But we know that when Christ appears, we shall be like him, for we shall see him as he is. All who have this hope in him purify themselves, just as he is pure. 1 John 3:2-3  </p>
                <div className='w-full text-center md:text-left lg:text-left'>
                  <button className='inline-block bg-customGold text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors duration-300'>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main >
        <div className='bg-greenDark p-4 pt-10 pb-10 h-full md:p-16 lg:p-32'>
          <VideoDisplay url={url} />
        </div>
        <div className='bg-customGray'>
          <About />
        </div>
        <div className='relative flex items-center justify-center bg-center bg-cover bg-[url("/bg-vers.jpg")] p-12'>
          <div className='absolute inset-0 bg-gradient-to-r from-[rgba(25,45,44,0.8)] to-[rgba(25,45,44,0.8)]'></div>
          <VerseReference
            biblicalReference='Psalm 55:22'
            verse='Give your burdens to the Lord, and he will take care of you'
          />
        </div>
        <div className='bg-customGray text-center p-6 pt-10 lg:pt-20'>
          <ChurchCommunity />
        </div>
        <div>

          <div className='bg-greenDark text-white p-4 pt-16 pb-10 h-full md:p-16 lg:p-32 text-center'>
            <OurPastors />
          </div>
        </div>
        <div>
          <div className='bg-customGray text-center p-6 pt-10 pb-12 lg:pt-16'>

            <h2 className='text-2xl font-bold'>Location</h2>
            <p className='font-light pt-4 w-[80%] mx-auto'>Check our location to visit us. Meanwhile, feel free to call us for more info.</p>
          </div>
          <div className='' >
            <Location />


          </div>
        </div>


      </main>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </>
  )
}

export default Home