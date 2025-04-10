import React from 'react';
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript
} from 'react-icons/bi';
import { motion } from 'framer-motion';

const icons = [
  { icon: BiLogoTypescript, color: 'text-sky-600', name: 'TypeScript' },
  { icon: BiLogoJavascript, color: 'text-yellow-500', name: 'JavaScript' },
  { icon: BiLogoReact, color: 'text-blue-400', name: 'React' },
  { icon: BiLogoHtml5, color: 'text-orange-400', name: 'HTML5' },
  { icon: BiLogoTailwindCss, color: 'text-cyan-400', name: 'Tailwind' },
  { icon: BiLogoMongodb, color: 'text-green-600', name: 'MongoDB' },
  { icon: BiLogoNodejs, color: 'text-lime-500', name: 'Node.js' },
  { icon: BiLogoCss3, color: 'text-blue-300', name: 'CSS3' },
  { icon: BiLogoPostgresql, color: 'text-indigo-400', name: 'PostgreSQL' },
  { icon: BiLogoPython, color: 'text-yellow-400', name: 'Python' }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export const Tech = () => {
  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: [0, 1, 0.9, 1], y: [20, 0, 2, 0] }}
    transition={{
      duration: 2,
    }}
  className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl tracking-wide drop-shadow-lg p-3"
>
  Technologies
</motion.h1>


      <motion.div
        className="grid grid-cols-2 gap-8 p-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {icons.map(({ icon: Icon, color, name }, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group flex flex-col items-center gap-3"
          >
            <Icon
              className={`cursor-pointer text-[70px] sm:text-[90px] md:text-[100px] ${color} transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-110 group-hover:shadow-[0_0_25px] group-hover:shadow-current`}
            />
            <span className="text-sm text-white opacity-70 group-hover:opacity-100 transition">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
