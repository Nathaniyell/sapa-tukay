import React from 'react'
import Settings from "../assets/settings.png"
import HeroImg from "../assets/herologo.png"

const Hero = () => {
  return (
    <div className='absolute top-32 right-20 md:top-0 md:right-0 md:mt-5 flex items-center justify-between flex-col md:flex-row z-0'>
        <div className='bg-red-600 w-full md:mx-auto md:w-[44%] ml-20 text-[#474747]'>
            <h1 className='text-5xl md:text-6xl font-semibold leading-relaxed'>Get your urgent 2k</h1>
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
            <button className='border border-lime-900 bg-teal-800 text-white px-8 py-2 rounded-md'>Get started</button>
            <span className='hover:underline flex items-center font-light'><img className='inline' src={Settings} alt="Settings" />&nbsp;How it works</span>
          </span>
        </div>
    <img className='w-[35%]' src={HeroImg} alt="Hero" />
    </div>
  )
}

export default Hero