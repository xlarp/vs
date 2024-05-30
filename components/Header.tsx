import { mono } from "@/pages/_app";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className={mono.className}>
      <header className="flex justify-between items-start md:items-center p-12 text-white fixed w-full z-30 top-0 pr-40">
        <div className="font-mono text-xl tracking-widest">fxx.best</div>
        <nav>
          <ul className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10 text-lg font-mono">
            <li className="text-white hover:text-blue-400 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105">
              <a href="https://tritan.gg/about">About</a>
            </li>
            <li className="text-white hover:text-blue-400 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105">
              <a href="mailto:fxx@kty.lol">Contact</a>
            </li>
            <li className="text-white hover:text-blue-400 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105">
              <a href="https://github.com/devfxx">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
