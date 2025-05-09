import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {

  const iconSize = 20

  return (
    <footer className="flex h-16 items-center justify-between bg-white text-black">
      <h1 className="w-full text-lg">Copyright © 2024</h1>
      <div className="md:flex">
        <FaLinkedin size={iconSize} />
        <IoMdMail size={iconSize}/>
      </div>
    </footer>
  );
}
