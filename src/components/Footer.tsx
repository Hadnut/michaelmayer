import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
  const iconSize = 20;

  return (
    <footer className="flex h-16 items-center justify-between bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="w-full text-lg">Copyright © 2025</h1>
      <div className="flex gap-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-200"
          href="https://www.linkedin.com/in/michael-mayer-2174301a5/"
        >
          <FaLinkedin size={iconSize} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-200"
          href="mailto:contact@michael-mayer.me"
        >
          <IoMdMail size={iconSize} />
        </a>
      </div>
    </footer>
  );
}
