import { mono } from "@/pages/_app";
import React from "react";

const Bio: React.FC = () => {
  return (
    <div className="text-white md:p-20 p-14">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 font-khula">
        <span className="bg-gradient-to-r from-white to-cum-purple text-transparent bg-clip-text">
          Fxx
        </span>
      </h1>
      <div className={mono.className}>
        <h2 className="text-lg md:text-lg mt-4">Software / DevOps Wizard</h2>
        <ul className="text-xl md:text-xl mt-4 space-y-2">
          <li>5 Years of Experience</li>
          <li>Golang and TypeScript</li>
        </ul>
      </div>
    </div>
  );
};

export default Bio;
