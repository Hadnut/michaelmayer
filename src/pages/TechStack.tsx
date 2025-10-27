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

export default function TechStack() {
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
        {/* Core Skills */}
        <div className="mb-12">
          <h3 className="mb-6 inline-block font-bold uppercase tracking-[8px] text-[#333]">
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {data?.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.1, duration: 0.5 },
                }}
              >
                <span className="inline-block rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:scale-105 hover:border-gray-400 hover:shadow-md">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Categories */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
          >
            <h3 className="mb-4 inline-block font-bold uppercase tracking-[8px] text-[#333]">
              Frontend Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            <h3 className="mb-4 inline-block font-bold uppercase tracking-[8px] text-[#333]">
              Backend & Database
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Node.js',
                'NestJS',
                'C#',
                'Java',
                'PostgreSQL',
                'MongoDB',
                'CosmosDB',
                'GraphQL',
                'REST APIs',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
          >
            <h3 className="mb-4 inline-block font-bold uppercase tracking-[8px] text-[#333]">
              Cloud & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'AWS',
                'Azure',
                'Docker',
                'Kubernetes',
                'CI/CD',
                'Azure DevOps',
                'Infrastructure as Code',
                'Helm',
                'Apache Kafka',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.5 },
            }}
          >
            <h3 className="mb-4 inline-block font-bold uppercase tracking-[8px] text-[#333]">
              Tools & Testing
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Jest', 'Cypress', 'Git', 'Figma', 'Vite', 'Scrum', 'Agile'].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
