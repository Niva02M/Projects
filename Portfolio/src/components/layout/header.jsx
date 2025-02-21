import React, { useState } from "react";
import { TbSquareRoundedLetterNFilled } from "react-icons/tb";
import Drawer from "./drawer";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="absolute mt-6 px-8 md:px-12 w-full flex items-center z-20">
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            <TbSquareRoundedLetterNFilled className="text-white h-10 hover:scale-125 cursor-pointer duration-300 ease-in-out transform" />
          </Link>
          <div className="bg-white/60 h-4 w-[1px]" />
          <div
            className="text-white font-semibold text-[18px] cursor-pointer duration-300 ease-in-out transform hover:scale-105 tracking-normal hover:tracking-widest"
            onClick={toggleDrawer}
          >
            Menu
          </div>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};

export default Header;
