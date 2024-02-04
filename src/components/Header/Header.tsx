import React, {Dispatch, Key, SetStateAction, useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {NavItem} from "../../types";


interface NavbarProps {
  activeItem?: Key;
  changeActiveItem: Dispatch<SetStateAction<Key>>
  navItems: NavItem[]
}

export default function Navbar({activeItem = 1, changeActiveItem, navItems}: NavbarProps) {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const title = "software engineer."

  return (
    <div className='bg-white flex justify-between items-center h-16 mx-auto text-black sticky top-0'>
      {/* Logo */}
      <h1 className='w-full text-2xl font-extrabold'>{title}</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className={` ${activeItem === item.id ? "bg-black text-white" : ""} p-2 pl-8 pr-8 hover:bg-black cursor-pointer duration-500 hover:text-white text-lg`}
            onClick={() => changeActiveItem(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 '>{title}</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
