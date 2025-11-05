import { useQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';

const profileQuery = () => ({
  queryKey: ['profile'],
  queryFn: async () => getProfile(),
});

const getProfile = async () =>
  (await fetch(`../../content/profile.json`).then((res) => res.json())) as ProfileData;

interface Skill {
  name: string;
  value: number;
}

interface ProfileData {
  aboutSection: {
    name: string;
    address: string;
    experience: string;
    welcomeText: string[];
  };
  skills: Skill[];
}

export default function Profile() {
  const { data } = useQuery(profileQuery());
  return (
    <motion.div
      animate={{
        y: 0,
        opacity: 100,
        transition: { duration: 1 },
      }}
      initial={{
        y: 20,
        opacity: 0,
      }}
    >
      <div className="p-10 xl:p-20">
        <span className="mb-12 inline-block font-bold tracking-[8px] text-gray-800 dark:text-gray-100 uppercase">
          About Me
        </span>
        <div className="mb-8 text-gray-700 dark:text-gray-300">
          {data?.aboutSection.welcomeText.map((text, index) => (
            <p key={index} className={index !== 0 ? 'mt-5' : ''}>
              {text}
            </p>
          ))}
        </div>
        <div className="mt-16 flex justify-between">
          <div className="md:w-[45%]">
            <span className="mb-12 inline-block font-bold tracking-[8px] text-gray-800 dark:text-gray-100 uppercase">
              Education
            </span>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-100">University of Ulm</h3>
                <p className="text-gray-700 dark:text-gray-300">Master of Science (Media Informatics)</p>
                <p className="text-gray-600 dark:text-gray-400">Grade: 1.3</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2014 - 2016</p>
              </div>
              <div>
                <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-100">University of Ulm</h3>
                <p className="text-gray-700 dark:text-gray-300">Bachelor of Science (Media Informatics)</p>
                <p className="text-gray-600 dark:text-gray-400">Grade: 1.7</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2011 - 2014</p>
              </div>
            </div>{' '}
            <span className="mt-16 mb-12 inline-block font-bold tracking-[8px] text-gray-800 dark:text-gray-100 uppercase">
              Interessts
            </span>
            <div>
              <div>
                <p className="text-gray-700 dark:text-gray-300">Road Cycling</p>
                <p className="text-gray-700 dark:text-gray-300">Snowboarding</p>
                <p className="text-gray-700 dark:text-gray-300">Road Cycling</p>
                <p className="text-gray-700 dark:text-gray-300">Road Cycling</p>
              </div>
            </div>
          </div>
          <div className="md:w-[50%]">
            <span className="mb-12 inline-block font-bold tracking-[8px] text-gray-800 dark:text-gray-100 uppercase">
              Work Experience
            </span>
            <div>
              <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                <div className="absolute top-1 -left-2 h-4 w-4 rounded-full bg-gray-800 dark:bg-gray-100"></div>
                <h3 className="mb-1 font-bold text-gray-800 dark:text-gray-100">Lead Software Engineer</h3>
                <p className="mb-1 text-gray-700 dark:text-gray-300">MaibornWolff GmbH</p>
                <p className="pb-6 text-sm text-gray-500 dark:text-gray-500">2023 - Present</p>
              </div>
              <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                <div className="absolute top-1 -left-2 h-4 w-4 rounded-full bg-gray-800 dark:bg-gray-100"></div>
                <h3 className="mb-1 font-bold text-gray-800 dark:text-gray-100">Senior Software Engineer</h3>
                <p className="mb-1 text-gray-700 dark:text-gray-300">MaibornWolff GmbH</p>
                <p className="pb-6 text-sm text-gray-500 dark:text-gray-500">2020 - 2023</p>
              </div>
              <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                <div className="absolute top-1 -left-2 h-4 w-4 rounded-full bg-gray-800 dark:bg-gray-100"></div>
                <h3 className="mb-1 font-bold text-gray-800 dark:text-gray-100">Professional Software Engineer</h3>
                <p className="mb-1 text-gray-700 dark:text-gray-300">MaibornWolff GmbH</p>
                <p className="pb-6 text-sm text-gray-500 dark:text-gray-500">2019 - 2020</p>
              </div>
              <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                <div className="absolute top-1 -left-2 h-4 w-4 rounded-full bg-gray-800 dark:bg-gray-100"></div>
                <h3 className="mb-1 font-bold text-gray-800 dark:text-gray-100">Junior Software Engineer</h3>
                <p className="mb-1 text-gray-700 dark:text-gray-300">MaibornWolff GmbH</p>
                <p className="pb-6 text-sm text-gray-500 dark:text-gray-500">2017 - 2019</p>
              </div>
              <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                <div className="absolute top-1 -left-2 h-4 w-4 rounded-full bg-gray-800 dark:bg-gray-100"></div>
                <h3 className="mb-1 font-bold text-gray-800 dark:text-gray-100">Internship Web Engineering</h3>
                <p className="mb-1 text-gray-700 dark:text-gray-300">Robert Bosch GmbH</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2015 - 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
