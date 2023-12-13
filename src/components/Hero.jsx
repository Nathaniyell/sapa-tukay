import React from 'react'

const Hero = () => {
  return (
    <div className='mt-10'>
        <div className='w-[44%] ml-20 text-[#474747]'>
            <h1 className='text-6xl font-semibold leading-relaxed'>Get your urgent 2k</h1>
            <p className='text-xl font-medium'>No cash, No wahala. Get our application and deal with Sapa</p>
          <div className='w-2/5 flex justify-between items-center gap-4 mt-2'>
          <span>
                <h5 className='font-medium text-lg'>20k &nbsp; +</h5>
                <p className='text-sm'>Active users</p>
                </span>
            <span>
                <h5 className='font-medium text-lg'>30M &nbsp; +</h5>
                <p className='text-sm'>Downloads</p>
                </span>
          </div>
          <span className='flex items-center justify-between w-[55%] mt-4'>
            <button className='border border-lime-900 bg-teal-800 text-white py-1 px-10 rounded-md'>Get started</button>
            <span>How it works</span>
          </span>
        </div>
    </div>
  )
}

export default Hero