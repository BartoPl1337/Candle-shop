import React from 'react'

const MainSec = () => {
  return (
    <div className='relative flex items-center justify-center'>
        <img src="bg-image.png" alt="" className='object-cover w-full absolute inset-0 h-full'/>
        <div className='bg-white/60 z-10 flex flex-col items-center backdrop-blur-md p-6 my-44 w-full max-w-[710px]'>
            <span className='text-5xl'>🌱 </span>
            <h1 className='text-5xl font-semibold mt-4'>The nature candle</h1>
            <span className='text-lg max-w-[550px] text-center mt-2'>All handmake with natural soy wax, Candleaf is companion for all your pleasure moments</span>
            <button className='bg-[#56B280] text-xl font-medium text-white rounded-sm px-11 py-2 mt-10 mb-6'>Discovery collection</button>
        </div>
    </div>
  )
}
export default MainSec