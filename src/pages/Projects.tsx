import { motion } from 'motion/react';

interface Project {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  role: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sales Data Architecture - Custom App Migration',
    company: 'Consumer Goods Company',
    period: '10/2024 - Present',
    description:
      'Sales Customer Architecture is a project aimed at providing an overview of sales data and structuring it effectively. The goal is to migrate an existing Microsoft Power Apps solution, which has reached its technical limits, to a custom web application built using state-of-the-art technology. The new solution will be developed with VueJS using Typescript, Pinia, and Bootstrap, and will be hosted on the Azure Cloud platform. The objective is not just to facilitate the migration but also to create an extendable product that can evolve and scale with future requirements. This initiative is focused on transforming the way sales data is managed, from structuring to advanced visualization, utilizing modern web technologies and cloud infrastructure for enhanced scalability and performance.',
    role: 'Frontend Lead, Technical Coordinator',
    technologies: ['ViteJS', 'VueJS', 'TypeScript', 'Bootstrap', 'Pinia', 'Azure Cloud'],
    status: 'in-progress',
  },
  {
    id: 2,
    title: 'iProcess Digital Production Control',
    company: 'Automotive Manufacturer',
    period: '06/2023 - 10/2024',
    description:
      'The Digital Production Platform (DPP) based on AWS services connects all production-related areas in automotive factories. The project\'s goal is to develop an application on a cloud platform (AWS) that will help factory employees achieve their production goals more efficiently. In the first phase of the project called "i.Process," an analog process for recording production figures, defect counts, and times will be digitized. This will allow live and retrospective analysis of errors and the effectiveness of actions taken through a Business Intelligence tool. The software utilizes IoT to connect the real machines in the factory with the system to get real-time data. This integration enables continuous monitoring and quick response to any issues, drastically improving the efficiency and accuracy of data collection. Thanks to a skilled team from Digital Design and Engineering and the use of AWS services, a Proof of Concept was quickly created. This demonstrated that agile software development, software quality, and development speed can be combined.',
    role: 'Solutions Architect',
    technologies: ['ReactJS', 'TypeScript', 'GraphQL', 'AWS Cloud'],
    status: 'completed',
  },
  {
    id: 3,
    title: 'Rental Robot 3.0',
    company: 'Medical Technology Company',
    period: '10/2021 - 06/2023',
    description:
      'The "Rental Robot" is a Rent & Return product for automated asset management. The automated cabinet makes it possible to provide the required work and safety materials flexibly on site (usually in industrial plants). We use React and Typescript in the frontend, C# and DotNet in the backend, Microsoft Azure cloud services and a document-based CosmosDB. Rental Robot 3.0 works through the interaction of connected rental robots via the Azure IoT Hub with an IoT adapter and two web applications. One of the applications is used for administrative asset management and the other provides the interface for a renter to borrow these assets. My role in this project goes from usual Backend development, creating features and fixing bugs, including connecting IoT devices with Azure and then with our backend, handling our database changes/migrations. To also supporting in the Frontend and reacting on alerts generated on Production, talking with the PO and helping them with their inquiries.',
    role: 'Lead Frontend Architect, Fullstack Developer',
    technologies: [
      'ReactJS',
      'TypeScript',
      'C#',
      'MongoDB',
      'Azure Cloud',
      'Kubernetes',
      'Docker',
      'CI/CD',
      'Infrastructure as Code',
    ],
    status: 'completed',
  },
  {
    id: 4,
    title: 'RoX Tool Development',
    company: 'Robotics Technology Company',
    period: '07/2020 - 10/2021',
    description:
      'A leading provider of robotics and system technology and a pioneer in Industry 4.0 needed support in developing the current user interface for the "RoX" project. The company is developing an interface based on web technologies to control future products called "RoX HMI." The UI elements are based on the web framework VueJS, communication with the products\' Linux-based control backend is done via the gRPC protocol, which is based on HTTP/2 and ProtoBuf. The standard components Vue Router for routing and VueX for state management are also used. For testing, the well-known frameworks Jest for unit tests and Cypress for end-to-end tests are employed.',
    role: 'Frontend Development, Technical Consultant',
    technologies: [
      'VueJS',
      'VueX',
      'TypeScript',
      'gRPC',
      'ProtoBuf',
      'Jest',
      'Cypress',
      'Envoy Proxy',
      'NodeJS',
      'Lerna',
      'Docker',
      'Azure DevOps',
      'Figma',
    ],
    status: 'completed',
  },
  {
    id: 5,
    title: 'New Platform - Evelin Lightweight Shop',
    company: 'Experience Platform Company',
    period: '02/2020 - 07/2020',
    description:
      'The goal of Evelin Lightweight is to integrate two existing platforms, each with its own PIM, billing, and shop systems, into a single central platform. The aim is to harmonize the processes so that the different backend systems can be abstracted, and the approximately 9,000 providers can be targeted with their content and appropriate pricing on one or more clients. The company has created a platform based on layers and events. The initial goal is to go live with the shop as the first client on this new platform and replace the existing shop.',
    role: 'Software Engineering, Technical Consultant, DevOps Engineering',
    technologies: [
      'React',
      'Express',
      'NestJS',
      'Symfony',
      'JavaScript',
      'TypeScript',
      'NodeJS',
      'PHP7',
      'Apache Kafka',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'Helm',
      'Jest',
      'Jenkins',
      'ElasticSearch',
    ],
    status: 'completed',
  },
  {
    id: 6,
    title: 'Smart Home Cloud Service',
    company: 'Home Appliance Manufacturer',
    period: '02/2017 - 01/2020',
    description:
      'With the Smart Home Cloud Service, a leading home appliance manufacturer aims to make its product range ready for the digital age. The cloud allows various smart devices (such as coffee machines, washing machines, refrigerators, ovens, etc.) to be remotely controlled through the cloud. This includes simple status checks of currently running programs, as well as starting and stopping programs on the devices. For this digital transformation, the company is gradually transitioning its devices from a ZigBee-based network infrastructure to an IP-WiFi-based infrastructure and is completely redeveloping the existing cloud services.',
    role: 'Voice Interface Developer',
    technologies: [
      'Java 11',
      'Dropwizard',
      'PostgreSQL',
      'Kafka',
      'Kubernetes',
      'AWS',
      'Azure',
      'Scrum',
    ],
    status: 'completed',
  },
];

export default function Projects() {
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
          Projects
        </span>

        <div className="mt-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 },
              }}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="mb-1 text-xl font-bold text-[#333]">{project.title}</h3>
                    <div className="flex flex-col text-sm text-gray-600 sm:flex-row sm:items-center sm:gap-4">
                      <span className="font-medium">{project.company}</span>
                      <span className="text-gray-500">{project.period}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-sm font-semibold text-gray-600">Role: </span>
                    <span className="text-sm text-gray-700">{project.role}</span>
                  </div>

                  <p className="mb-4 leading-relaxed text-gray-700">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-600">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {project.link && (
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
