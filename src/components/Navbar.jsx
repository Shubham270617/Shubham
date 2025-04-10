
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";

export const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false);

const menuOpen = () =>{
    setIsOpen(!isOpen);
}


  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent text-4xl font-bold tracking-wide font-[Orbitron] hover:scale-105 transition duration-300"
>
      ⚡Shubham
      </a>
      <ul className="hidden md:flex md:gap-10">
        <li>
          <a
            href="#home"
            className="relative text-lg font-[Quicksand] tracking-wide transition-all duration-300 hover:text-cyan-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-400 before:transition-all before:duration-500 hover:before:w-full"
          >Home
          </a> 
        </li>
        <li>
          <a
            href="#tech"
             className="relative text-lg font-[Quicksand] tracking-wide transition-all duration-300 hover:text-cyan-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-400 before:transition-all before:duration-500 hover:before:w-full"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="#experience"
             className="relative text-lg font-[Quicksand] tracking-wide transition-all duration-300 hover:text-cyan-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-400 before:transition-all before:duration-500 hover:before:w-full"
          >
            Experience
          </a>
        </li>
        <li>
          <a
          href="#projects"
            className="relative text-lg font-[Quicksand] tracking-wide transition-all duration-300 hover:text-cyan-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-400 before:transition-all before:duration-500 hover:before:w-full"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="relative text-lg font-[Quicksand] tracking-wide transition-all duration-300 hover:text-cyan-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-400 before:transition-all before:duration-500 hover:before:w-full"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative text-lg font-[Quicksand] tracking-wide transition-all duration-300 hover:text-cyan-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-400 before:transition-all before:duration-500 hover:before:w-full"
          >
            Contact
          </a>
        </li>
      </ul>

      <ul className="hidden md:flex md:gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a href="https://www.linkedin.com/in/shubham-sinha-581790149/" target="blank" rel="noopener noreferrer">
          <BsLinkedin />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <a href="https://x.com/WSxSpidy" target="blank" rel="noopener noreferrer">
          <BsTwitterX />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
        <a href="https://github.com/Shubham270617" target="blank" rel="noopener noreferrer">
          <BsGithub />
          </a>
        </li>
      </ul>
{isOpen ? (
    <BiX className="block md:hidden text-4xl" onClick={menuOpen}/>
):(
    <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>
)}

{isOpen && (
    <motion.div 
    initial={{ x: 300 }}
    animate={{ x: 0 }}
    exit={{ x: 300 }}
    transition={{ duration: 0.3 }}
    className={`fixed top-[84px] right-0 z-50 h-screen w-2/3 bg-black/90 p-6 backdrop-blur-lg shadow-lg border-l border-pink-500/20 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-8">
        <li>
          <a
            href="#home"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >Home
          </a> 
        </li>
        <li>
          <a
            href="#tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Contact
          </a>
        </li>
        </ul>

        <ul className="flex flex-wrap gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a href="https://www.linkedin.com/in/shubham-sinha-581790149/" target="blank" rel="noopener noreferrer">
          <BsLinkedin />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <a href="https://x.com/WSxSpidy" target="blank" rel="noopener noreferrer">
          <BsTwitterX />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
        <a href="https://github.com/Shubham270617" target="blank" rel="noopener noreferrer">
          <BsGithub />
          </a>
        </li>
      </ul>

    </motion.div>
)}


    </nav>
  );
};
