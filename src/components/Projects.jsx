import React from "react";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLinkAlt } from "react-icons/bi";

const projectData = [
  {
    title: "Framer Motion",
    description:
      "A simple frontend project that is being asked by clients to show the power of framer motion.",
    image: image1,
    technologies: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
    link: "https://framer-demo-one.vercel.app/",
    github: "https://github.com/Shubham270617/Framer-Demo",
  },

  {
    title: "Weather App",
    description:
      "A sleek and responsive Weather App built using React and Tailwind CSS. It fetches real-time weather data based on user location or city search. The intuitive UI displays temperature, conditions, humidity, and more—perfect for quick, accurate weather updates on any device.",
    image: image2,
    technologies: ["React", "API", "Tailwind CSS", "JavaScript"],
    link: "https://weather-app-blush-zeta-10.vercel.app/",
    github: "https://github.com/Shubham270617/Weather-App",
  },

  {
    title: "Todo App",
    description:
      "A simple and responsive ToDo app built with React and styled using Tailwind CSS. Users can add, delete, and mark tasks as complete. The clean and minimal UI ensures a smooth user experience across devices. Perfect for organizing daily tasks and boosting productivity",
    image: image3,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://to-do-application-omega.vercel.app/",
    github: "https://github.com/Shubham270617/To-Do-Application",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A simple and responsive Tic Tac Toe game built with React and styled using Tailwind CSS. Users can play against each other or against the computer. The clean and minimal UI ensures a smooth user experience across devices. Perfect for a quick game to pass the time.",
    image: image4,
    technologies: ["React", "Tailwind CSS", "JavaScript", "Animation"],
    link: "https://tic-tac-toe-orpin-kappa.vercel.app/",
    github: "https://github.com/Shubham270617/TicTacToe",
  },
];

const techIcons = {
  React: <FaReact className="text-blue-400" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  API: <BiLinkAlt />,
};

const ScrollAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollAnimation>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-[300px] sm:w-[200px] md:w-[300px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 px-4 py-1 text-sm font-medium text-white shadow-md hover:shadow-pink-400/40"
              >
                {techIcons[tech] && <span>{techIcons[tech]}</span>}
                <span>{tech}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </motion.a>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800"
            >
              <FaGithub className="text-lg" />
              View Code
            </motion.a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollAnimation>
        <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl tracking-wide drop-shadow-lg p-2">
          {" "}
          My Projects{" "}
        </h1>
      </ScrollAnimation>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
