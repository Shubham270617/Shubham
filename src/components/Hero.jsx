import React from 'react'
import Shubham from "/Shubham.png"
import {motion} from 'framer-motion';
export const Hero = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
        <div className='flex flex-col items-center justify-center  gap-10 text-white'>
<motion.div
    initial={{opacity:0, y:-50}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.8, delay:0.2}}
    
>
    <img src={Shubham} className='w-[250px] rounded-full cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[320px] ' alt="" />
</motion.div>


<motion.div 
    initial={{opacity:0, y:50}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.8, delay:0.2}}


className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
    <h1 className="bg-gradient-to-r from-blue-600  to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl">Shubham Sinha</h1>
    <h3 className="bg-gradient-to-r from-pink-600  to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl" >MERN Stack Developer</h3>
    <p className='md:text-base text-pretty text-sm text-gray-300'>
    🚀 As a passionate MERN Stack Developer, I thrive on building full-stack web applications using MongoDB 🍃, Express.js ⚙️, React.js ⚛️, and Node.js 🟢. <br/>From designing seamless user interfaces 🎨 to crafting efficient APIs 🔗, I love turning complex ideas into dynamic, real-world solutions 💡.
<br/>
On the backend side, I specialize in creating robust RESTful APIs 🌐, managing databases with MongoDB 🗂️, handling user authentication 🔐, and implementing secure, scalable server-side logic 🧠. I enjoy working with middleware 🧩, ensuring smooth data flow between front and back, and deploying applications with tools like Docker 🐳 and cloud services ☁️.
<br/>
Whether it's debugging tricky issues 🐞, optimizing performance ⚡, or collaborating with teams 🤝, I bring energy, creativity, and clean code 🧼 to every project. Always learning 📚, always building 🛠️ — let's turn code into magic! ✨
    </p>
</motion.div>

 {/* Resume Button */}
 <motion.a
            href="/resume.pdf" // Replace with actual path
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='mt-6 inline-block rounded-2xl bg-gradient-to-r from-blue-600 to-pink-500 px-6 py-3 text-white font-medium shadow-lg transition duration-300 hover:from-pink-600 hover:to-blue-500'
          >
            📄 Download Resume
          </motion.a>
        </div>
    </div>
  )
}

