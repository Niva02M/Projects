import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col justify-center text-white h-full mt-32 px-8 md:px-12 ">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold mb-6"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          About{" "}
          <span className="text-green-400 hover:text-lime-400 transition-colors duration-300">
            Me
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl leading-relaxed max-w-3xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          Hello! I'm{" "}
          <span className="text-green-400 hover:text-lime-600 transition-colors duration-300">
            Niva Maharjan
          </span>
          , a{" "}
          <span className="text-green-400 hover:text-lime-600 transition-colors duration-300">
            Frontend Developer
          </span>{" "}
          as well as a student in my final year with a passion for building
          beautiful, responsive, and user-friendly web applications. I
          specialize in using
          <span className="text-green-400 hover:text-lime-600 transition-colors duration-300">
            {" "}
            React
          </span>{" "}
          to create seamless digital experiences that make a difference.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-left leading-relaxed max-w-3xl mt-6"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        >
          I am proficient in using{" "}
          <span className="text-green-400 hover:text-lime-600 transition-colors duration-300">
            {" "}
            React Hooks, Tailwind CSS, and AntDesign
          </span>{" "}
          to build responsive and engaging user interfaces. My goal is to
          continuously learn, grow, and contribute to the world of web
          development.
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/1lkAjv90tVynFQQAbMxF2h07bkZ7_dXmQ/view?usp=sharing"
          className="mt-10 w-[150px] bg-white/20 text-white rounded-sm px-6 py-3 text-lg font-medium  shadow-md cursor-pointer hover:shadow-lime-600 transition-colors duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
        >
          View My CV
        </motion.a>
      </div>
    </>
  );
};

export default AboutMe;
