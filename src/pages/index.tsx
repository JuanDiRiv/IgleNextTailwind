import React from 'react'
import Navbar from '../components/Navbar/Navbar'


function Home() {
  return (
    <>
      <header className='bg-[url("https://hosting.renderforestsites.com/images/5699226/135134/284fbfc4cc2e05fb0fe23adc053ac610.jpg")] bg-center bg-cover  '>
        {/* Contenido del header */}
        <Navbar />
        <div className='pt-12 lg:pt-0'>
          <div className=''>
            <div className='p-12'>
              <div className='flex flex-col items-center justify-center h-full text-white lg:w-5/12 md:w-80 lg:p-16'>
                <h1 className='text-5xl font-bold pb-4 lg:pb-4 lg:text-8xl'>THE WORD OF GOD</h1>
                <div className='w-full h-1 bg-white size mt-1 mb-3' />
                <p className='text-lg pb-6'>Dear friends, now we are children of God, and what we will be has not yet been made known. But we know that when Christ appears, we shall be like him, for we shall see him as he is. All who have this hope in him purify themselves, just as he is pure. 1 John 3:2-3  </p>
                <div className='w-full text-center md:text-left lg:text-left'>
                  <button className='bg-customGold text-white py-3 px-8 mt-4'>Get Started</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
      <main>

      </main>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default Home