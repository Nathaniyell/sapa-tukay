import React from 'react'
import Settings from "../assets/settings.png"
import HeroImg from "../assets/herologo.png"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='relative top-20 flex items-center justify-between flex-col-reverse md:flex-row z-0'>
        <motion.div
              initial={{x: -200, opacity: 0}}
              whileInView={{opacity: 1, x:0}}
              transition={{duration:.7, delay: 0.4}}
              viewport={{once: true}}
        className='w-10/12 mx-auto md:w-1/2 text-[#474747]'>
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
          <span className=' flex items-center justify-between lg:w-2/3 gap-4 my-4'>
            <button className='border border-lime-900 bg-teal-800 text-white px-4 py-2 rounded-md'>Get started</button>
            <span className='hover:underline flex items-center font-light'><img className='inline' src={Settings} alt="Settings" />&nbsp;How it works</span>
          </span>
        </motion.div>
    <motion.img
     initial={{x: 200, opacity: 0}}
     whileInView={{opacity: 1, x:0}}
     transition={{duration:.7, delay: 0.4}}
     viewport={{once: true}}
    className='w-10/12 md:w-[40%] mx-auto relative overflow-x-hidden' src={HeroImg} alt="Hero" />
    </div>
  )
}

export default Hero