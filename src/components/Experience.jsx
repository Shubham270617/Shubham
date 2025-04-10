import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaBuilding } from 'react-icons/fa'
const experienceData = [
    {
      title: 'Full Stack Developer',
      company: 'RWS Group ',
      icon: <FaCode className="w-5 h-5 text-pink-400" />,
      period: 'Aug 2024 - Dec 2024',
      description: [
        'Developed and maintained web applications using React and Node.js.',
        'Implemented RESTful APIs and optimized database queries.',
        'Collaborated with cross-functional teams to enhance product features.'
      ]
    },
    {
      title: 'Talent Acquisition Specialist',
      company: 'WellTech Infotech Solutions',
      icon: <FaBuilding className="w-5 h-5 text-purple-400" />,
      period: 'Jan 2022  Aug 2024',
        description: [
            'Conducted full-cycle recruitment for technical positions.',
            'Developed and maintained relationships with candidates and hiring managers.',
            'Utilized various sourcing methods to attract top talent.'
        ],
    },
    {
        title: 'Web Developer',
        company: 'Magneto PVT LTD',
        icon: <FaCode className="w-5 h-5 text-pink-400" />,
        period: 'Jan 2022  Dec 2023',
          description: [
            'Highly qualified in Full Stack Developer and proficient in both front-end and back-end technologies used in web development.', 
            'Possess a broad skill set that allows me to work on all aspects of a web application, from server-side logic and databases to user interfaces and client-side scripting.', 
            'Key skills include proficiency in languages like JavaScript, Python, or Ruby, knowledge of frameworks such as React, Angular, or Node.js, and familiarity with databases like SQL or NoSQL.',
            'Ability to manage and implement projects independently or as part of a team, ensuring the entire web development process runs smoothly from start to finish.',
            'Strong problem-solving skills and attention to detail, allowing me to troubleshoot and optimize web applications effectively.',
          ],
      }
  ]


  export const Experience = () => {
    return (
      <div
        id="experience"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-16 px-4 py-20 md:px-8 lg:px-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1.2 }}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-4xl md:text-6xl font-extrabold text-transparent tracking-wide drop-shadow-xl"
        >
          My Experience
        </motion.h1>
  
        <div className="relative flex flex-col gap-10 max-w-3xl w-full">
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-pink-500 to-sky-500 rounded-full" />
  
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative ml-10 flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
            >
              <div className="absolute -left-7 top-6 bg-white/10 p-3 rounded-full shadow-lg">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="text-sm text-gray-400">{item.company} • {item.period}</p>
              <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
  )
}

