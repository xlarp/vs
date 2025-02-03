import { mono } from "@/pages/_app";
import Bio from "@/components/Bio";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <div className={mono.className}>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-center md:justify-between items-center p-4 relative md:relative text-white mt-8 w-full z-30 top-0 md:right-0 md:pr-60"
      >
        <div className="font-mono text-lg md:text-xl tracking-widest mb-4 md:mb-0 absolute w-full text-center md:relative md:text-left left-0 pl-40">
          throwing.lol
        </div>

        <nav className="md:absolute right-0 pr-40">
          <ul className="flex flex-col md:flex-row space-y-4 md:pl-40 md:space-y-0 md:space-x-10 text-lg font-mono">
            <li className="text-white hover:text-custom-main cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white hover:text-custom-main cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105">
              <Link href="/about">About</Link>
            </li>
            <li className="text-white hover:text-custom-main cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105">
              <Link href="/skills">Skills</Link>
            </li>
          </ul>
        </nav>
      </motion.header>
    </div>
  );
}

export default Header;
