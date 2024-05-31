import { mono } from "@/pages/_app";
import EmailIcon from "@/public/assets/email.svg";
import KittyIcon from "@/public/assets/kitty.svg";
import WorldIcon from "@/public/assets/world.svg";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-cust-gray py-12 px-8 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="text-2xl mb-4 font-mono">
          <div className={mono.className}>
            <div className="transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-blue-300 mb-1">
              <a href="https://fxx.best">fxx.best</a>
            </div>
            <div className="text-sm opacity-70 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-blue-300 mb-4 md:mb-0">
              <a href="https://github.com/devfxx/fxx">src/</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
          <div>
            <div className="font-medium mb-4 flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-blue-400">
              <WorldIcon className="h-5 w-5" />
              <span>
                <a href="https://tritan.gg">Tritan Internet</a>
              </span>
            </div>
            <ul className="space-y-4 opacity-70">
              <li className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="https://tritan.gg/about">About</a>
              </li>
              <li className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="https://github.com/Team-Tritan">GitHub</a>
              </li>
              <li className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="https://discord.gg/b85N597sac">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-4 flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-purple-300">
              <KittyIcon className="h-5 w-5" />
              <span>
                <a href="https://kitty.software">kitty.software</a>
              </span>
            </div>
            <ul className="space-y-4 opacity-70">
              <li className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="https://git.kty.lol">Git :3</a>
              </li>
              <li className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="https://git.kty.lol/footjobs.today">Footjobs.Today</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-4 flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-blue-400">
              <EmailIcon className="h-5 w-5" />
              <span>
                <a href="mailto:fxx@kty.lol">Contact</a>
              </span>
            </div>
            <ul className="space-y-4 opacity-70">
              <li className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="https://discord.com/users/423452508372074506">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
