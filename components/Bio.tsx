import { mono } from "@/pages/_app";
import React from "react";

const Bio: React.FC = () => {
  return (
    <div className="text-white p-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-2 font-khula">
        <span className="bg-gradient-to-r from-white to-cum-purple text-transparent bg-clip-text">
          Fxx
        </span>
      </h1>
      <div className={mono.className}>
        <h2 className="text-lg md:text-xl mt-4 font-mono">
          Software / DevOps Wizard
        </h2>
        <p className="text-base md:text-lg mt-4 font-mono">
          5 Years of Experience
          <br />
          Golang and TypeScript
        </p>
      </div>
    </div>
  );
};

export default Bio;
