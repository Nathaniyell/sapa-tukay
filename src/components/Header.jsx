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
          className="text-4xl font-bold cursor-pointer text-lime-900 md:hidden"
          onClick={() => setNavMobile(!navMobile)}
        >
          {navMobile ? <GrClose /> : <RxHamburgerMenu />}
        </button>
      </div>
            <ul
        className={`bg-[#ebfbb3] z-10 flex w-2/3 gap-2 lg:gap-2 mx-auto md: items-center justify-around md:bg-inherit flex-col md:flex-row  ${
          navMobile ? "translate-x-0" : "-translate-x-[200%]"
        } transition-transform md:transform-none`}
      >
        {navLinks.map((link, index) => {
          return (
            <li
              className="text-[#474747] text-xl my-2 hover:underline cursor-pointer"
              key={index}
            >
              {link}
            </li>
          );
        })}
      <aside className={`z-10 mt-4 md:mt-0 md:ml-8 flex flex-col md:flex-row gap-4 items-center mx-auto w-full pb-4 md:pb-0`}>
        <button className="border border-lime-900 bg-teal-800 text-white py-1 px-6 rounded-md">
          Login
        </button>
        <button className="py-1 w-20 rounded-md border border-teal-800 bg-inherit">
          Sign up
        </button>
      </aside>
      </ul>
    </nav>
  );
};

export default Header;
