import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Logo from "../assets/logo.png";

const Header = () => {
  const navLinks = ["Home", "Services", "Features", "Contact"];
  const [navMobile, setNavMobile] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto pt-2 z-10">
      <div className="flex items-center justify-between w-11/12 md:w-fit">
        <img src={Logo} alt="Logo" />
        <button
          className="text-4xl font-bold cursor-pointer text-lime-900 md:invisible"
          onClick={() => setNavMobile(!navMobile)}
        >
          {navMobile ? <GrClose /> : <RxHamburgerMenu />}
        </button>
      </div>
      <div></div>
      <ul
        className={`z-10 flex w-2/3 gap-2 lg:gap-2 md:w-1/3 mx-auto md:-mr-1 items-center justify-around md:bg-inherit flex-col md:flex-row bg-teal-600 ${
          navMobile ? "translate-x-0" : "-translate-x-[200%]"
        } transition-transform md:transform-none`}
      >
        {navLinks.map((link, index) => {
          return (
            <li
              className="text-white md:text-[#474747] text-xl my-2 hover:underline cursor-pointer"
              key={index}
            >
              {link}
            </li>
          );
        })}
      </ul>
      <aside className={`z-10 mt-4 flex flex-col md:flex-row md:gap-6 gap-4 items-center mx-auto ${
          navMobile ? "translate-x-0" : "-translate-x-[300%]"
        } transition-transform md:transform-none`}>
        <button className="border border-lime-900 bg-teal-800 text-white py-1 px-6 rounded-md">
          Login
        </button>
        <button className="py-1 px-6 rounded-md border border-teal-800 bg-inherit">
          Sign up
        </button>
      </aside>
    </nav>
  );
};

export default Header;
