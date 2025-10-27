import { useQuery } from 'react-query';
import { motion } from 'motion/react';

const profileQuery = () => ({
  queryKey: ['profile'],
  queryFn: async () => getProfile(),
});

const getProfile = async () =>
  (await fetch(`../../content/profile.json`).then((res) => res.json())) as Profile;

interface Skill {
  name: string;
  value: number;
}

interface Profile {
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
        <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
          About Me
        </span>
        <div className="mb-8">
          {data?.aboutSection.welcomeText.map((text, index) => (
            <p key={index} className={index !== 0 ? 'mt-5' : ''}>
              {text}
            </p>
          ))}
        </div>
        <div className="mt-16 flex justify-between">
          <div className="md:w-[45%]">
            <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
              Education
            </span>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#333] mb-2">University of Ulm</h3>
                <p className="text-gray-700">Master of Science (Media Informatics)</p>
                <p className="text-gray-600">Grade: 1.3</p>
                <p className="text-gray-500 text-sm">2014 - 2016</p>
              </div>
              <div>
                <h3 className="font-bold text-[#333] mb-2">University of Ulm</h3>
                <p className="text-gray-700">Bachelor of Science (Media Informatics)</p>
                <p className="text-gray-600">Grade: 1.7</p>
                <p className="text-gray-500 text-sm">2011 - 2014</p>
              </div>
            </div>
          </div>
          <div className="md:w-[50%]">
            <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
              Work Experience
            </span>
            <div>
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-[#333] rounded-full"></div>
                <h3 className="font-bold text-[#333] mb-1">Lead Software Engineer</h3>
                <p className="text-gray-700 mb-1">MaibornWolff GmbH</p>
                <p className="text-gray-500 text-sm pb-6">2023 - Present</p>
              </div>
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-[#333] rounded-full"></div>
                <h3 className="font-bold text-[#333] mb-1">Senior Software Engineer</h3>
                <p className="text-gray-700 mb-1">MaibornWolff GmbH</p>
                <p className="text-gray-500 text-sm  pb-6">2020 - 2023</p>
              </div>
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-[#333] rounded-full"></div>
                <h3 className="font-bold text-[#333] mb-1">Professional Software Engineer</h3>
                <p className="text-gray-700 mb-1">MaibornWolff GmbH</p>
                <p className="text-gray-500 text-sm  pb-6">2019 - 2020</p>
              </div>
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-[#333] rounded-full"></div>
                <h3 className="font-bold text-[#333] mb-1">Junior Software Engineer</h3>
                <p className="text-gray-700 mb-1">MaibornWolff GmbH</p>
                <p className="text-gray-500 text-sm  pb-6">2017 - 2019</p>
              </div>
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-[#333] rounded-full"></div>
                <h3 className="font-bold text-[#333] mb-1">Internship Web Engineering</h3>
                <p className="text-gray-700 mb-1">Robert Bosch GmbH</p>
                <p className="text-gray-500 text-sm">2015 - 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}