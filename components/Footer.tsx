"use client";

import { mono } from "@/pages/_app";
import React from "react";
import EmailIcon from "../public/assets/email.svg";
import KittyIcon from "../public/assets/kitty.svg";
import WorldIcon from "../public/assets/world.svg";

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-cust-gray py-12">
      <div className="container mx-auto flex justify-between">
        <div>
          <div className="text-2xl font-mono transition-transform duration-500 ease-in-out transform hover:scale-105">
            <div className={mono.className}>
              <a href="https://fxx.best">fxx.best</a>
            </div>
          </div>
        </div>
        <div className="flex space-x-16">
          <div>
            <div className="font-medium mb-6 flex items-center space-x-2 transition-transform duration-500 ease-in-out transform hover:scale-105">
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
                <a href="https://git.kty.lol">Git</a>
              </li>
              <li className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="https://discord.gg/b85N597sac">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-6 flex items-center space-x-2 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <KittyIcon className="h-5 w-5" />
              <span>
                <a href="https://kitty.software">kitty.software</a>
              </span>
            </div>
          </div>
          <div>
            <div className="font-medium mb-6 flex items-center space-x-2 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <EmailIcon className="h-5 w-5" />
              <span>
                <a href="mailto:fxx@kty.lol">Contact</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
