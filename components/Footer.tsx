import { mono } from "@/pages/_app";
import resources from "@/static";
import { motion } from "framer-motion";
import { AtSignIcon, GitForkIcon, GithubIcon, MailIcon } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white py-12 px-8 md:px-0"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="text-2xl mb-4 font-mono">
          <div className={mono.className}>
            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="text-white mb-1"
            >
              <a href={resources.sites.me}>throwing.lol</a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="text-sm text-white/70 mb-4 md:mb-0"
            >
              <a href={resources.git.siteRepo}>src/</a>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
          <div>
            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="font-medium mb-4 flex items-center space-x-2 text-white"
            >
              <GithubIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={resources.socials.github}>
                  GitHub
                </a>
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="font-medium flex items-center space-x-2 text-white"
            >
              <GitForkIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={resources.git.pwngit.me}>
                  PwnGit
                </a>
              </span>
            </motion.div>
          </div>

          <div>
            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="font-medium mb-4 flex items-center space-x-2 text-white"
            >
              <AtSignIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={resources.socials.matrix}>
                  Matrix
                </a>
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="font-medium flex items-center space-x-2 text-white"
            >
              <MailIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={`mailto:${resources.socials.email}`}>
                  Contact
                </a>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
