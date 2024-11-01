import useToast from "@/lib/useToast";
import { mono } from "@/pages/_app";
import EmailIcon from "@/public/assets/email.svg";
import links from "@/static";
import React from "react";
import Toast from "./Toast";

const Footer: React.FC = () => {
  const { toast, showToast } = useToast();

  const clip = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied "${text}" to clipboard!`);
  };

  const discordOwo = (e: any) => {
    if (e.shiftKey || e.ctrlKey) {
      window.open(
        `https://discord.com/users/${links.socials.discord.id}`,
        "_blank"
      );
    } else {
      clip(".fxx");
    }
  };

  return (
    <>
      <Toast message={toast.message} isActive={toast.isActive} />

      <footer className="text-white bg-custom-gray py-12 px-8 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="text-2xl mb-4 font-mono">
            <div className={mono.className}>
              <div className="transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-orange mb-1">
                <a href={links.sites.me}>me.kty.lol</a>
              </div>
              <div className="text-sm opacity-70 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-orange mb-4 md:mb-0">
                <a href={links.git.siteRepo}>src/</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
            <div>
              <div className="font-medium mb-4 flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-orange">
                <EmailIcon className="h-5 w-5" />
                <span>
                  <a href={`mailto:${links.socials.email}`}>Contact</a>
                </span>
              </div>
              <ul className="space-y-4 opacity-70">
                <li className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                  <button
                    onClick={discordOwo}
                    className="transition-transform duration-500 ease-in-out transform hover:scale-105"
                  >
                    Discord
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
