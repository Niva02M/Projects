import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center text-white min-h-screen px-8 md:px-12 ">
      <motion.h1
        className="text-white text-4xl md:text-6xl font-bold mb-6"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Work{" "}
        <span className="text-green-400 hover:text-lime-400 transition-colors duration-300">
          Experience
        </span>
      </motion.h1>
    </div>
  );
};

export default WorkExperience;
