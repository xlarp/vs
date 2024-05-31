import { mono } from "@/pages/_app";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className={mono.className}>
      <header className="flex flex-col md:flex-row justify-center md:justify-between items-center p-4 relative md:fixed text-white mt-8 w-full z-30 top-0 md:right-0 md:pr-60">
        <div className="font-mono text-lg md:text-xl tracking-widest mb-4 md:mb-0 absolute w-full text-center md:relative md:text-left left-0 pl-40">
          fxx.best
        </div>
        <nav className="md:absolute right-0 pr-40">
          <ul className="flex flex-col md:flex-row space-y-4 md:pl-40 md:space-y-0 md:space-x-10 text-lg font-mono">
            <li className="text-white hover:text-blue-400 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105">
              <a href="https://throwing.lol/fxx">Akkoma</a>
            </li>
            <li className="text-white hover:text-blue-400 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105">
              <a href="https://bsky.app/profile/fxx.kty.lol">BlueSky</a>
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
