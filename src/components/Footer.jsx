import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full text-white py-10 mt-20 "
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Name or Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-800 bg-clip-text text-transparent drop-shadow-md tracking-wide"
          >
            🚀 Shubham's Portfolio
          </motion.h2>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex space-x-6 text-xl"
        >
          <a
            href="https://github.com/Shubham270617"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-300 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-sinha-581790149/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition duration-300" />
          </a>
          <a href="mailto:shub88510@gmail.com">
            <FaEnvelope className="hover:text-pink-400 transition duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2 }}
        className="h-[1px] bg-gray-500 opacity-30 my-6 mx-6"
      ></motion.div>

      {/* License Section */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center text-sm text-gray-300"
      >
        © {new Date().getFullYear()} Shubham Sinha. All rights reserved. |
        Designed & Built with 💻 using React & Framer Motion.
      </motion.p>
    </motion.footer>
  );
};
