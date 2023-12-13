import React from 'react'

const Header = () => {
    const navLinks = ["Home", "Services", "Features", "Contact"]
  return (
    <nav className='flex items-center justify-between w-10/12 mx-auto'>
        <div>Logo</div>
        <ul>
            {navLinks.map((link, index)=>{
                return(
                    <li key={index}>{link}</li>
                )
            })}
        </ul>
        <aside>
            <button>Login</button>
            <button>Sign Up</button>
        </aside>
    </nav>
  )
}

export default Header