import { useQuery } from 'react-query';
import { Progress } from 'flowbite-react';
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
              Interrests
            </span>
            <ul>
              <li className="float-left mb-[8px] w-full">Painting Drawing</li>
              <li className="float-left mb-[8px] w-full ">Reading Writing</li>
              <li className="float-left mb-[8px] w-full ">Music Cinema</li>
              <li className="float-left mb-[8px] w-full ">Travel Picnik</li>
              <li className="float-left w-full">Rain Snow</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex justify-between">
          <div className="md:w-[45%]">
            <span className="mb-4 inline-block font-bold uppercase tracking-[8px] text-[#333]">
              Tech Stack
            </span>
            {data?.skills.map((skill, index) => (
              <div key={index} className="mt-5">
                <Progress
                  color="gray"
                  progress={skill.value}
                  size="sm"
                  textLabel={skill.name}
                  labelText
                  textLabelPosition="outside"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}