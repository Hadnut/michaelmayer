import profileImage from '../assets/profile.jpeg';
import { useTypingHeadlines } from 'use-typing-headlines';

interface HomeProps {
  changeActiveItem: () => void;
}

export default function Home({ changeActiveItem }: HomeProps) {
  const [headline] = useTypingHeadlines(['Fullstack Developer', 'Cloud Engineer', 'Tech Lead']);

  return (
    <div className="flex h-screen bg-blue-100 bg-opacity-20">
      <div className="grid md:grid-cols-8">
        <div className="md:col-span-3">
          <img
            src={profileImage}
            alt="Profile-Michael_Mayer"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex items-center md:col-span-5">
          <div className="pl-10 xl:pl-20">
            <h1 className="text-6xl font-extrabold text-gray-800">MICHAEL MAYER</h1>
            <div className="mb-8 mt-8 w-20 border-2 border-black"></div>
            <h2 className="mb-8 text-3xl text-black">
              <span className="text-gray-500">Creative</span> {headline}
            </h2>
            <button
              onClick={changeActiveItem}
              className="border-2 border-black bg-black px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-opacity-0 hover:text-black"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
