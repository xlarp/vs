import { mono } from "@/pages/_app";
import React from "react";

const Bio: React.FC = () => {
  return (
    <div className="text-white md:p-20 p-14">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 font-khula">
        <span className="text-custom-main bg-clip-text">proto</span>
      </h1>
      <div className={mono.className}>
        <h2 className="text-xl md:text-lg mt-4 font-bold drop-shadow-lg shadow-black">
          Software / DevOps <span className="text-custom-main">Wizard</span>
        </h2>
        <ul className="text-xl md:text-xl mt-4 space-y-2 drop-shadow-lg shadow-black">
          <li>6 Years of Experience</li>
          <li>Golang and TypeScript</li>
        </ul>
      </div>
    </div>
  );
};

export default Bio;
