import React from 'react'

const Header = () => {
    const navLinks = ["Home", "Services", "Features", "Contact"]
  return (
    <nav className='flex items-center justify-between w-10/12 mx-auto py-8 bg-teal-600'>
        <div>Logo</div>
        <ul className='flex w-1/3 mx-auto items-center justify-around bg-red-700'>
            {navLinks.map((link, index)=>{
                return(
                    <li className='text-lime-950 text-lg cursor-pointer' key={index}>{link}</li>
                )
            })}
        </ul>
        <aside className='w-1/4 flex justify-around items-center mx-auto bg-blue-500'>
            <button className='border border-lime-900 bg-teal-800 text-white py-1 px-8 rounded-md'>Login</button>
            <button className='py-1 px-8 rounded-md border border-teal-800 bg-inherit'>Sign up</button>
        </aside>
    </nav>
  )
}

export default Header