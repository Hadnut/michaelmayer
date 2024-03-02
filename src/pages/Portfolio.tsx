import { useQuery } from 'react-query';
import { Progress } from 'flowbite-react';

const portfolioQuery = () => ({
  queryKey: ['portfolio'],
  queryFn: async () => getPortfolio(),
});

const getPortfolio = async () =>
  (await fetch(`../../content/portfolio.json`).then((res) => res.json())) as Portfolio;

interface Skill {
  name: string;
  value: number;
}

interface Portfolio {
  aboutSection: {
    name: string;
    address: string;
    experience: string;
    welcomeText: string[];
  };
  skills: Skill[];
}

export default function Portfolio() {
  const { data } = useQuery(portfolioQuery());
  return (
    <div className="p-10 xl:p-20">
      <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
        About Me
      </span>
      <div className="flex justify-between">
        <div className="md:w-[45%]">
          {data?.aboutSection.welcomeText.map((text, index) => (
            <p key={index} className={index !== 0 ? 'mt-5' : ''}>
              {text}
            </p>
          ))}
        </div>
        <div className="md:w-[50%]">
          <ul>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Name:</span>
              <span className="second inline-block">{data?.aboutSection.name}</span>
            </li>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Address:</span>
              <span className="second inline-block">{data?.aboutSection.address}</span>
            </li>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Degree:</span>
              <span className="second inline-block">Master of Science</span>
            </li>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Experience:</span>
              <span className="second inline-block">{data?.aboutSection.experience}</span>
            </li>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Mail:</span>
              <span className="second inline-block">
                <a
                  className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                  href="#"
                >
                  hello@cavani.com
                </a>
              </span>
            </li>
            <li className="float-left w-full">
              <span className="first inline-block min-w-[100px] font-bold">Phone:</span>
              <span className="second inline-block">+77 022 444 05 05</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-28 flex justify-between">
        <div className="md:w-[45%]">
          <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
            Frontend
          </span>
          <p>
            Hello there! My name is Alan Walker. I am a graphic designer, and I am very passionate
            and dedicated to my work.
          </p>
          <p className="mt-5">
            With 20 years experience as a professional a graphic designer, I have acquired the
            skills and knowledge necessary to make your project a success.
          </p>
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
      <div className="mt-28 flex justify-between">
        <div className="md:w-[45%]">
          <span className="mb-4 inline-block font-bold uppercase tracking-[8px] text-[#333]">
            Frontend
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
    </div>
  );
}
