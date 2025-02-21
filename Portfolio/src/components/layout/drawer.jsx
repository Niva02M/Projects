import React from "react";
import { Link } from "react-router-dom";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-20"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-black text-white shadow-lg z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4 p-4 w-full">
          <button
            onClick={onClose}
            className=" text-white hover:text-lime-400 transition-colors duration-300 text-2xl font-normal self-end"
          >
            &times;
          </button>

          <Link
            to="/"
            className="text-green-400 text-center text-2xl font-normal font-bebas uppercase hover:text-lime-600 transition-colors duration-300 ease-in-out"
          >
            Explore my portfolio
          </Link>

          <div className="flex flex-col text-center gap-4 mt-4">
            <Link
              to="/about"
              className=" text-sm font-normal font-raleway cursor-pointer hover:text-lime-200 transition-colors duration-300 ease-in-out"
              onClick={onClose}
            >
              About Me
            </Link>
            <div className="w-full border-[1px] border-white/20" />
            <Link
              to="/#projects"
              className=" text-sm font-normal font-raleway cursor-pointer hover:text-lime-200 transition-colors duration-300 ease-in-out"
              onClick={onClose}
            >
              Projects
            </Link>
            <div className="w-full border-[1px] border-white/20" />
            <Link
              to="/#experience"
              className=" text-sm font-normal font-raleway cursor-pointer hover:text-lime-200 transition-colors duration-300 ease-in-out"
              onClick={onClose}
            >
              Work Experience
            </Link>
            <div className="w-full border-[1px] border-white/20" />

            <Link
              to="/#connect"
              className=" text-sm font-normal font-raleway cursor-pointer hover:text-lime-200 transition-colors duration-300 ease-in-out"
              onClick={onClose}
            >
              Connect with Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
