import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
  return (
    <footer className="flex h-16 items-center justify-between bg-white text-black">
      <h1 className="w-full text-lg">Copyright © 2024</h1>
      <div className="md:flex">
        <FaLinkedin />
        <IoMdMail />
      </div>
    </footer>
  );
}
