import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
  const iconSize = 20;

  return (
    <footer className="flex h-16 items-center justify-between bg-white text-black">
      <h1 className="w-full text-lg">Copyright © 2025</h1>
      <div className="md:flex">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
          href="https://www.linkedin.com/in/michael-mayer-2174301a5/"
        >
          <FaLinkedin size={iconSize} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
          href="mailto:contact@michael-mayer.me"
        >
          <IoMdMail size={iconSize} />
        </a>
      </div>
    </footer>
  );
}
