import React from "react";
import bg from "./../assets/bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const buttonWipe = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
  };
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={bg} className="w-full h-full object-cover" alt="Background" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 0%,
              black 50%
            )`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-white text-8xl font-bold">404</h1>
        <p className="text-green-400 text-xl md:text-2xl font-medium">
          Error: Page Not Found
        </p>
        <motion.div>
          <motion.div
            className="mt-12 "
            variants={buttonWipe}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          >
            <Link
              to="/"
              className="bg-white text-center text-[#191919] text-sm md:text-lg font-medium font-ibm px-6 py-3  shadow-md hover:scale-105 hover:shadow-lime-600 transition-transform duration-300"
            >
              Go back
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageNotFound;
