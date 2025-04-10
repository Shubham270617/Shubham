import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'

const educationData = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Sikkim Manipal University',
    icon: <FaGraduationCap className="w-5 h-5 text-purple-400" />,
    period: '2017-2021',
    highlights: [
      'Graduated with First Class Distinction.',
      'Built 4+ academic projects using React, Node.js, and Python.',
      'Lead organizer of the college tech fest in 2022.'
    ]
  },
  {
    degree: 'Higher Secondary (Science Stream + Economics)',
    institution: 'St. Karen\'s Secondary School',
    icon: <FaUniversity className="w-5 h-5 text-pink-400" />,
    period: '2015-2017',
    highlights: [
      'Secured 90% with top scores in Maths & Economics.',
      'Participated in national coding and robotics competitions.',
      'This unique blend equips me with both analytical rigor and economic insight—allowing me to understand problems from both scientific and strategic perspectives.'
    ]
  }
]

const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
        ease: 'easeOut'
      }
    })
  }
  
  // Icon animation variant
  const iconVariant = {
    animate: {
      y: [0, -5, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut'
      }
    }
  }
  
  export const EducationSection = () => {
    return (
      <div
        id="education"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-16 px-4 py-20 md:px-8 lg:px-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-4xl md:text-6xl font-extrabold text-transparent tracking-wide drop-shadow-xl"
        >
          Education
        </motion.h1>
  
        <div className="relative flex flex-col gap-10 max-w-3xl w-full">
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
  
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              className="relative ml-10 flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 shadow-xl hover:scale-[1.02] hover:shadow-pink-500/20 transition-all duration-300"
            >
              <motion.div
                variants={iconVariant}
                animate="animate"
                className="absolute -left-7 top-6 bg-white/10 p-3 rounded-full shadow-md"
              >
                {item.icon}
              </motion.div>
              <h2 className="text-xl font-bold text-white">{item.degree}</h2>
              <p className="text-sm text-gray-400">{item.institution} • {item.period}</p>
              <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
                {item.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }