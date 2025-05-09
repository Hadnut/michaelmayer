import { useTypingHeadlines } from 'use-typing-headlines';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  const [headline] = useTypingHeadlines(['Fullstack Developer', 'Cloud Engineer', 'Tech Lead']);

  return (
    <div className="flex h-full items-center">
      <div className="pl-10 xl:pl-20">
        <motion.div
          animate={{
            y: 0,
            opacity: 100,
            transition: { duration: 0.5, ease: 'easeOut' },
          }}
          initial={{
            y: 20,
            opacity: 0,
          }}
        >
          <h1 className="text-6xl font-extrabold text-gray-800">MICHAEL MAYER</h1>
        </motion.div>

        <motion.div
          animate={{
            y: 0,
            opacity: 100,
            transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
          }}
          initial={{
            y: 20,
            opacity: 0,
          }}
        >
          <div className="mb-8 mt-8 w-20 border-2 border-black"></div>
        </motion.div>

        <motion.div
          animate={{
            y: 0,
            opacity: 100,
            transition: { duration: 0.5, ease: 'easeOut', delay: 0.15 },
          }}
          initial={{
            y: 20,
            opacity: 0,
          }}
        >
          <h2 className="mb-8 text-3xl text-black">
            <span className="text-gray-500">Creative</span> {headline}
          </h2>
        </motion.div>

        <motion.div
          animate={{
            y: 0,
            opacity: 100,
            transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
          }}
          initial={{
            y: 20,
            opacity: 0,
          }}
        >
          <NavLink
            className="block w-fit border-2 border-black bg-black px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-opacity-0 hover:text-black"
            to={'/contact'}
          >
            Get in Touch
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}
