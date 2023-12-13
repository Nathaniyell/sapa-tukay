import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../assets/logo.png'

const Header = () => {
    const navLinks = ["Home", "Services", "Features", "Contact"]
  return (
    <nav className='flex flex-col md:flex-row items-center justify-between w-10/12 mx-auto pt-2 '>
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <ul className='flex w-2/3 gap-2 md:gap-0 md:w-1/3 mx-auto md:-mr-1 items-center justify-around md:bg-inherit flex-col md:flex-row bg-green-700'>
            {navLinks.map((link, index)=>{
                return(
                    <li className='text-[#474747] text-xl my-2 hover:underline cursor-pointer' key={index}>{link}</li>
                )
            })}
        </ul>
        <aside className='mt-4 flex flex-col md:flex-row gap-8 items-center mx-auto'>
            <button className='border border-lime-900 bg-teal-800 text-white py-1 px-6 rounded-md'>Login</button>
            <button className='py-1 px-6 rounded-md border border-teal-800 bg-inherit'>Sign up</button>
        </aside>
        <RxHamburgerMenu className='text-4xl font-bold text-lime-900 md:hidden' />
    </nav>
  )
}

export default Header