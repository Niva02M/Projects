import React from "react";
import bg from "./../assets/bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TextRevealCard } from "../components/ui/text-reveal-card";

const Landing = () => {
  const textWipe = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  const buttonWipe = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
  };

  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 50%)`,
            }}
          />
        </div>{" "}
        <div className="relative z-10 flex flex-col justify-center w-[900px] h-full mt-24 p-12">
          <motion.div className="overflow-hidden">
            <motion.p
              className="mr-48 text-[#d0d0d0] text-[16px] md:text-[26px] font-medium font-bebas inline-flex gap-1"
              variants={textWipe}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              Hi There{" "}
              <div className="text-green-600 hover:text-lime-600 transition-colors duration-500 ease-in-out">
                !!!
              </div>{" "}
              <div className="w-1" /> I am
            </motion.p>
            <TextRevealCard
              text="A Frontend Developer"
              revealText="Niva Maharjan"
            />
          </motion.div>
          <motion.div className="overflow-hidden">
            <motion.p
              className="text-[#d0d0d0] text-[16px] md:text-[26px] font-medium font-bebas inline-flex gap-1 w-[600px]"
              variants={textWipe}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
            >
              and a final-year student passionate about crafting seamless,
              responsive, and engaging web experiences using React.
            </motion.p>
          </motion.div>
          <motion.div>
            <motion.div
              className="mt-12"
              variants={buttonWipe}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
            >
              <Link
                to="/about"
                className="mt-10 w-[150px] bg-white/20 text-white rounded-sm px-6 py-3 text-lg font-medium  shadow-md cursor-pointer hover:shadow-lime-600 tracking-normal hover:tracking-widest transition-all transform ease-in-out duration-300"
              >
                About me
              </Link>
            </motion.div>
          </motion.div>{" "}
          <div className="text-white/40 mt-12 ml-48 flex flex-col items-center w-32">
            Scroll
            <div className="w-[1px] mt-4 h-24 border-dashed border-[1px] border-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
