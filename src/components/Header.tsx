import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavItem } from '../types';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  navItems: NavItem[];
}

export default function Header({ navItems }: NavbarProps) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const title = 'software engineer.';
  const navItemStyle =
    'p-2 pl-8 pr-8 hover:bg-black cursor-pointer duration-500 hover:text-white text-lg';

  return (
    <header className="flex h-16 items-center justify-between bg-white text-black">
      {/* Logo */}
      <h1 className="w-full text-2xl font-extrabold">{title}</h1>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={`${item.route}`}
            className={({ isActive }) =>
              isActive ? 'bg-black text-white ' + navItemStyle : navItemStyle
            }
          >
            {item.text}
          </NavLink>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-white duration-500 ease-in-out md:hidden'
            : 'fixed bottom-0 left-[-100%] top-0 w-[60%] duration-500 ease-in-out'
        }
      >
        {/* Mobile Logo */}
        <h1 className="m-4 w-full text-3xl font-bold text-gray-500 ">{title}</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              key={item.id}
              to={`${item.route}`}
              className="block cursor-pointer border-b border-gray-600 p-4 duration-300 hover:bg-black hover:text-white"
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
