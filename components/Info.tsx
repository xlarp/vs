"use client";

import { mono } from "@/pages/_app";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function About() {
  const phrases = [
    "building things",
    "problem solving",
    "open source",
    "experimenting",
    "reversing",
    "automating",
    "breaking things",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentPhrase((prev) => {
          const currentIndex = phrases.indexOf(prev);
          return phrases[(currentIndex + 1) % phrases.length];
        });
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white md:p-20 p-14"
    >
      <motion.h1
        className="text-6xl md:text-7xl font-bold mb-4 font-khula"
        whileHover={{ scale: 1.05 }}
      >
        <span className="bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent">
          Hi!
        </span>
      </motion.h1>
      <div className={mono.className}>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-lg mt-4 font-bold drop-shadow-lg shadow-black"
        >
          I{"'"}m <span className="text-custom-main">proto</span>, a software
          engineer from Canada
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg mt-4 space-y-4"
        >
          <li>
            <p className="text-white drop-shadow-lg shadow-black">
              I {"<3"} software{" & "}
              <span
                className={`text-custom-main transition-opacity duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {currentPhrase}
              </span>
            </p>
          </li>
          <li className="space-y-2">
            <p className="text-white drop-shadow-lg shadow-black">
              I{"'"}m currently working at{" "}
              <a
                target="blank"
                href="https://tritan.gg/"
                className="hover:underline text-custom-main font-semibold transition-colors duration-300 hover:text-custom-secondary"
              >
                Tritan Internet
              </a>
            </p>
          </li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default About;
