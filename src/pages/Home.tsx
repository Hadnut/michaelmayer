import { useTypingHeadlines } from 'use-typing-headlines';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import profileImage from '../assets/profile.jpeg';

export default function Home() {
  const [headline] = useTypingHeadlines([
    'Fullstack Developer',
    'Cloud Engineer',
    'Solutions Architect',
  ]);

  return (
    <div className="flex h-full flex-col md:flex-row md:items-center md:justify-start overflow-hidden">
      {/* Profile Image - Mobile Only (Top Section) */}
      <motion.div
        className="md:hidden flex-1 -mx-6 -mt-8"
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
        <img
          src={profileImage}
          alt="Profile-Michael_Mayer"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Content Section */}
      <div className="px-6 py-6 md:py-8 md:pl-10 xl:pl-20 w-full md:flex-none">

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-gray-100">
            MICHAEL MAYER
          </h1>
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
          <div className="mt-6 mb-6 md:mt-8 md:mb-8 w-16 md:w-20 border-2 border-black dark:border-white"></div>
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
          <h2 className="mb-6 md:mb-8 text-xl sm:text-2xl md:text-3xl text-black dark:text-white">
            <span className="text-gray-500 dark:text-gray-400">Lead</span> {headline}
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
            className="block w-fit border-2 border-black dark:border-white bg-black dark:bg-white px-6 py-3 md:px-7 md:py-4 font-bold text-white dark:text-black transition-all duration-300 hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white"
            to={'/contact'}
          >
            Get in Touch
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}
