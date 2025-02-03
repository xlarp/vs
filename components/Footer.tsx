import { mono } from "@/pages/_app";
import DiscordIcon from "@/public/assets/discord.svg";
import EmailIcon from "@/public/assets/email.svg";
import GithubIcon from "@/public/assets/github.svg";
import PwnIcon from "@/public/assets/pwn.svg";
import _static from "@/static";
import { motion } from "framer-motion"; // added import

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white py-12 px-8 md:px-0"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="text-2xl mb-4 font-mono">
          <div className={mono.className}>
            <div className="transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-main mb-1">
              <a href={_static.sites.me}>throwing.lol</a>
            </div>
            <div className="text-sm transition-all duration-500 ease-in-out transform hover:scale-105 text-white/70 hover:text-custom-main mb-4 md:mb-0">
              <a href={_static.git.siteRepo}>src/</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
          <div>
            <div className="font-medium mb-4 flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-main">
              <GithubIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={_static.socials.github}>
                  xlarp
                </a>
              </span>
            </div>

            <div className="font-medium flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-main">
              <EmailIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={`mailto:${_static.socials.email}`}>
                  contact
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
            <div>
              <div className="font-medium mb-4 flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-main">
                <PwnIcon className="h-5 w-5" />
                <span>
                  <a target="_blank" href={_static.git.pwngit.me}>
                    jolts
                  </a>
                </span>
              </div>
              <div className="font-medium flex items-center space-x-2 transition-all duration-500 ease-in-out transform hover:scale-105 text-white hover:text-custom-main">
                <DiscordIcon className="h-5 w-5" />
                <span>
                  <a
                    target="_blank"
                    href={`https://discord.com/users/${_static.socials.discord.id}`}
                  >
                    discord
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
