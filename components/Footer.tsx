import { mono } from "@/pages/_app";
import EmailIcon from "@/public/assets/email.svg";
import GithubIcon from "@/public/assets/github.svg";
import config from "@/static";
import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="text-white bg-custom-gray py-12 px-8 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="text-2xl mb-4 font-mono">
            <div className={mono.className}>
              <div className="transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-main mb-1">
                <a href={config.sites.me}>throwing.lol</a>
              </div>
              <div className="text-sm opacity-70 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-main mb-4 md:mb-0">
                <a href={config.git.siteRepo}>src/</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
            <div>
              <div className="font-medium mb-4 flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-main">
                <EmailIcon className="h-5 w-5" />
                <span>
                  <a target="_blank" href={`mailto:${config.socials.email}`}>
                    Contact
                  </a>
                </span>
              </div>
              <div className="font-medium flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-main">
                <GithubIcon className="h-5 w-5" />
                <span>
                  <a target="_blank" href={config.socials.github}>
                    GitHub
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
