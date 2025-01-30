import { mono } from "@/pages/_app";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="text-white md:p-20 p-14">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 font-khula">
        <span className="bg-gradient-to-r from-purple-400 to-custom-main text-transparent bg-clip-text">
          404
        </span>
      </h1>
      <div className={mono.className}>
        <h2>Not Found</h2>
        <ul className="text-xl md:text-xl mt-4 space-y-2">
          <li>Whoops! The page you are looking for does not exist. {":("}</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
