import React from "react";
import bg from "./../assets/bg.jpg";
import AboutMe from "../components/about/about-me";
import WorkExperience from "../components/about/work-experience";

const About = () => {
  return (
    <div className="bg-black min-h-screen w-screen overflow-hidden relative">
      <div>
        {" "}
        <div className="absolute inset-0">
          <img
            src={bg}
            className="w-full h-full object-cover"
            alt="Background"
          />
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
        <AboutMe />
      </div>
    </div>
  );
};

export default About;
