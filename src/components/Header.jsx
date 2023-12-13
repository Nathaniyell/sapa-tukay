import React from 'react'

const Header = () => {
    const navLinks = ["Home", "Services", "Features", "Contact"]
  return (
    <nav className='flex items-center justify-between w-10/12 mx-auto py-8'>
        <div>Logo</div>
        <ul className='flex w-2/5 mx-auto items-center justify-around'>
            {navLinks.map((link, index)=>{
                return(
                    <li className='text-lime-950 text-lg' key={index}>{link}</li>
                )
            })}
        </ul>
        <aside className='w-1/4 flex justify-around items-center'>
            <button className='border border-lime-900 bg-teal-800 text-white py-1 px-8 rounded-md'>Login</button>
            <button className='py-1 px-8 rounded-md border border-teal-800 bg-inherit'>Sign up</button>
        </aside>
    </nav>
  )
}

export default Header