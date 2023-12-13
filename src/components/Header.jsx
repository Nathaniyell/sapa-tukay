import React from 'react'

const Header = () => {
    const navLinks = ["Home", "Services", "Features", "Contact"]
  return (
    <nav className='flex items-center justify-between w-10/12 mx-auto py-4'>
        <div>Logo</div>
        <ul className='flex w-2/5 mx-auto items-center justify-around'>
            {navLinks.map((link, index)=>{
                return(
                    <li className='text-lime-950 text-lg' key={index}>{link}</li>
                )
            })}
        </ul>
        <aside className='w-1/5 flex justify-around items-center'>
            <button>Login</button>
            <button>Sign Up</button>
        </aside>
    </nav>
  )
}

export default Header