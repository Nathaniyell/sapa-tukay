import React from 'react'
import Settings from "../assets/settings.png"
import HeroImg from "../assets/herologo.png"

const Hero = () => {
  return (
    <div className='absolute top-32 right-20 md:top-16 md:right-0 flex items-center justify-between flex-col-reverse md:flex-row z-0'>
        <div className='w-full md:mx-auto md:w-[44%] ml-20 text-[#474747]'>
            <h1 className='text-[40px] md:text-6xl font-semibold leading-relaxed'>Get your urgent 2k</h1>
            <p className='text-xl font-medium'>No cash, No wahala. Get our application and deal with Sapa</p>
          <div className='md:w-2/5 flex justify-between items-center md:gap-4 my-2'>
          <span>
                <h5 className='font-medium text-lg'>20k &nbsp; +</h5>
                <p className='text-sm'>Active users</p>
                </span>
            <span>
                <h5 className='font-medium text-lg'>30M &nbsp; +</h5>
                <p className='text-sm'>Downloads</p>
                </span>
          </div>
          <span className='flex items-center justify-between md:w-[55%] my-4'>
            <button className='border border-lime-900 bg-teal-800 text-white px-8 py-2 rounded-md'>Get started</button>
            <span className='hover:underline flex items-center font-light'><img className='inline' src={Settings} alt="Settings" />&nbsp;How it works</span>
          </span>
        </div>
    <img className='md:w-[40%] mx-auto relative -right-10 md:-right-[3.169rem] overflow-x-hidden' src={HeroImg} alt="Hero" />
    </div>
  )
}

export default Hero