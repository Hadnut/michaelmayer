import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavItem } from '../types';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  navItems: NavItem[];
}

export default function Header({ navItems }: NavbarProps) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const title = 'software engineer.';
  const navItemStyle =
    'p-2 pl-4 pr-4 hover:bg-black dark:hover:bg-white cursor-pointer duration-500 hover:text-white dark:hover:text-black text-lg whitespace-nowrap';

  return (
    <header className="flex h-16 items-center justify-between bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Logo */}
      <h1 className="flex-shrink-0 text-2xl font-extrabold">{title}</h1>

      {/* Desktop Navigation and Theme Toggle */}
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex flex-shrink-0">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={`${item.route}`}
              className={({ isActive }) =>
                isActive ? 'bg-black dark:bg-white text-white dark:text-black ' + navItemStyle : navItemStyle
              }
            >
              {item.text}
            </NavLink>
          ))}
        </ul>
        <ThemeToggle />
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed top-0 left-0 h-full w-[60%] border-r border-r-gray-900 dark:border-r-gray-700 bg-white dark:bg-gray-900 duration-500 ease-in-out md:hidden z-50'
            : 'fixed top-0 bottom-0 left-[-100%] w-[60%] duration-500 ease-in-out'
        }
      >
        {/* Mobile Logo */}
        <h1 className="m-4 w-full text-3xl font-bold text-gray-500 dark:text-gray-400">{title}</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              key={item.id}
              to={`${item.route}`}
              onClick={closeNav}
              className="block cursor-pointer border-b border-gray-600 dark:border-gray-700 p-4 duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
            >
              {item.text}
            </NavLink>
          </li>
        ))}

        {/* Mobile Theme Toggle */}
        <li className="p-4">
          <ThemeToggle />
        </li>
      </ul>
    </header>
  );
}
