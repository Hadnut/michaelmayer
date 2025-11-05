import { useQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';

const profileQuery = () => ({
  queryKey: ['profile'],
  queryFn: async () => getProfile(),
});

const getProfile = async () =>
  (await fetch(`../../content/profile.json`).then((res) => res.json())) as ProfileData;

interface ProfileData {
  aboutSection: {
    name: string;
    address: string;
    experience: string;
    welcomeText: string[];
  };
}

export default function Contact() {
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
        <span className="mb-12 inline-block font-bold tracking-[8px] text-[#333] uppercase">
          Get in Touch
        </span>

        <div className="flex justify-between">
          <div className="md:w-[45%]">
            <p className="leading-relaxed text-gray-700">
              I&apos;m always interested in new opportunities and exciting projects. Whether
              you&apos;re looking for a technical lead, fullstack developer, or consultant, I&apos;d
              love to hear from you.
            </p>
            <p className="mt-5 leading-relaxed text-gray-700">
              With extensive experience in modern web technologies, cloud platforms, and enterprise
              solutions, I can help bring your ideas to life.
            </p>
          </div>

          <div className="md:w-[50%]">
            <span className="mb-6 inline-block font-bold tracking-[8px] text-[#333] uppercase">
              Contact Information
            </span>
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
                <span className="first inline-block min-w-[100px] font-bold">Mail:</span>
                <span className="second inline-block">
                  <a
                    className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                    href="mailto:contact@michael-mayer.me"
                  >
                    contact@michael-mayer.me
                  </a>
                </span>
              </li>
              <li className="float-left w-full">
                <span className="first inline-block min-w-[100px] font-bold">Phone:</span>
                <span className="second inline-block">+49 15730120969</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <span className="mb-6 inline-block font-bold tracking-[8px] text-[#333] uppercase">
            Let&apos;s Connect
          </span>
          <p className="leading-relaxed text-gray-700">
            Feel free to reach out via email or phone. I&apos;m based in Germany and available for
            both remote and on-site projects across Europe.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
