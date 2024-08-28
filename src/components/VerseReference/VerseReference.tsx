import React from 'react'
interface VerseBgProps {
verse: string
biblicalReference: string
}
function VerseReference({verse, biblicalReference}: VerseBgProps) {
  return (
    <div className="p-6 text-white z-10 relative " >
      <h2 className='text-[1.7rem] font-bold text-center md:text-3xl lg:text-4xl'>{`"${verse}"`}</h2>
      <div className='bg-customGold w-24 h-[4px]  mx-auto mt-6 mb-4'></div>
      <p className='text-center font-light md:text-lg lg:text-lg'>{`-${biblicalReference}`}</p>
    </div>
  )
}

export default VerseReference