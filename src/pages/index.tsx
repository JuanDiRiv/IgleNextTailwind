import React from 'react'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <>
      <header className='bg-[url("https://hosting.renderforestsites.com/images/5699226/135134/284fbfc4cc2e05fb0fe23adc053ac610.jpg")] bg-center bg-cover  '>
        {/* Contenido del header */}
        <Navbar />
        <div>
          <div className=''>
            <div className='p-12'>
              <div className='flex flex-col items-center justify-center h-full text-white lg:w-5/12 md:w-80 lg:p-16'>
                <h1 className='text-5xl font-bold pb-4 lg:pb-4 lg:text-8xl'>THE WORD OF GOD</h1>
                <hr className='w-full font-bold h-2 size lg:pt-4' />
                <p className='text-lg pb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio atque minus, reiciendis, nihil sit, mollitia dolorem nam quidem voluptates dolor dignissimos. Ab sed in quibusdam voluptatem tempora enim iste ad officiis et consequuntur nemo temporibus accusamus,  </p>
                <div className='w-full text-center md:text-left lg:text-left'>
                  <button className='bg-customGold text-white py-3 px-8 mt-4'>Get Started</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default Home