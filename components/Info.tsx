"use client";

import GitHubProjects from "@/components/GitHubProjects";
import { mono } from "@/pages/_app";
import resources from "@/static";
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
      <motion.h1 className="text-5xl md:text-6xl font-bold mb-8 font-khula">
        <span className="bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent">
          Hi, I'm proto
        </span>
      </motion.h1>
      <div className={mono.className}>
        <motion.section className="mb-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent drop-shadow-lg shadow-black"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-base md:text-lg"
          >
            I'm 17, from Toronto, Canada.
          </motion.p>
        </motion.section>
        <motion.section className="mb-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent drop-shadow-lg shadow-black"
          >
            Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-base md:text-lg"
          >
            <span className="text-custom-main font-semibold transition-colors duration-300 hover:text-pink-300">
              Tritan Internet (AS393577)
            </span>{" "}
            &mdash; DevOps, Backend, & Security Engineering.
          </motion.p>
        </motion.section>
        <motion.section className="mb-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent drop-shadow-lg shadow-black"
          >
            Passion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-base md:text-lg"
          >
            I love collaborating on innovative development projects and creating
            secure digital solutions.
          </motion.p>
        </motion.section>
        <GitHubProjects />
        <motion.section className="mb-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent drop-shadow-lg shadow-black"
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-base md:text-lg"
          >
            Discord:{" "}
            <a
              className="font-bold text-custom-main"
              href={`https://discord.com/users/${resources.socials.discord.id}`}
            >
              {resources.socials.discord.name}
            </a>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-base md:text-lg"
          >
            Email:{" "}
            <a
              href={`mailto:${resources.socials.email}`}
              className="font-bold text-custom-main"
            >
              {resources.socials.email}
            </a>
          </motion.p>
        </motion.section>
        <motion.section>
          <p className="mt-4 text-base md:text-lg text-white">
            I'm hooked on{" "}
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-custom-main"
            >
              {currentPhrase}
            </motion.span>
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default About;
