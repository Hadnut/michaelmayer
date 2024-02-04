import { useTypingHeadlines } from 'use-typing-headlines';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [headline] = useTypingHeadlines(['Fullstack Developer', 'Cloud Engineer', 'Tech Lead']);

  return (
    <div className="pl-10 xl:pl-20">
      <h1 className="text-6xl font-extrabold text-gray-800">MICHAEL MAYER</h1>
      <div className="mb-8 mt-8 w-20 border-2 border-black"></div>
      <h2 className="mb-8 text-3xl text-black">
        <span className="text-gray-500">Creative</span> {headline}
      </h2>
      <div className="w-fit border-2 border-black bg-black px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-opacity-0 hover:text-black">
        <NavLink to={'/contact'}>Get in Touch</NavLink>
      </div>
    </div>
  );
}
