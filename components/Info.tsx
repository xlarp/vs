import { mono } from "@/pages/_app";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-white md:p-20 p-14">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 font-khula">
        <span className="bg-gradient-to-r from-white to-custom-main text-transparent bg-clip-text">
          Hi!
        </span>
      </h1>
      <div className={mono.className}>
        <h2 className="text-xl md:text-lg mt-4 font-bold drop-shadow-lg shadow-black">
          I{"'"}m 7fx, a software engineer from Canada.
        </h2>
        <ul className="text-base md:text-lg mt-4 space-y-6">
          <li>
            <p className="text-white drop-shadow-lg shadow-black">
              I started programming in 2019 and have since then developed a
              passion for software development.
            </p>
            <p className="text-white drop-shadow-lg shadow-black">
              I{"'"}ve worked on various projects, ranging from small scripts to
              large-scale codebases.
            </p>
          </li>
          <li>
            <p className="text-white drop-shadow-lg shadow-black">
              I{"'"}m currently focusing on my college studies and working on
              personal projects to further develop my skills in software
              engineering.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
