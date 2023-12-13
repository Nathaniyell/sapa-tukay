import React from 'react'

const Hero = () => {
  return (
    <div>
        <div>
            <h1 className='text-3xl font-semibold'>Get your urgent 2k</h1>
            <p className='text-xl font-medium'>No cash, No wahala. Get our application and deal with Sapa</p>
          <div className='flex justify-between items-center gap-4 text-[#474747]'>
          <span>
                <h5 className='font-medium text-xl'>20k &nbsp; +</h5>
                <p>Active users</p>
                </span>
            <span>
                <h5 className='font-medium text-xl'>30M &nbsp; +</h5>
                <p>Downloads</p>
                </span>
          </div>
          <span className='flex items-center justify-between gap-4'>
            <button className='border border-lime-900 bg-teal-800 text-white py-1 px-6 rounded-md'>Get started</button>
            <span>How it works</span>
          </span>
        </div>
    </div>
  )
}

export default Hero