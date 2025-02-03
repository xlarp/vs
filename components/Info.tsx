"use client";

import Projects from "@/components/GitHubProjects";
import { mono } from "@/pages/_app";
import resources from "@/static";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function About() {
  const phrases = [
    "building things",
    "problem solving",
    "experimenting",
    "reversing malware",
    "automating",
    "breaking things (sometimes)",
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
            I'm 17, from Toronto, Canada
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
          <div className="mt-2 space-y-4">
            {resources.work.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="text-base md:text-lg grid grid-cols-[220px_1fr] gap-2"
              >
                <a
                  className="text-custom-main font-semibold transition-all duration-300 hover:text-custom-secondary hover:decoration-custom-secondary hover:underline hover:underline-offset-4 decoration-transparent underline underline-offset-4"
                  href={work.site}
                  target="_blank"
                >
                  {work.title}
                </a>
                <span>{work.role}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Projects />

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
              className="font-bold text-custom-main transition-all duration-300 hover:text-custom-secondary hover:decoration-custom-secondary hover:underline hover:underline-offset-4 decoration-transparent underline underline-offset-4"
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
              className="font-bold text-custom-main transition-all duration-300 hover:text-custom-secondary hover:decoration-custom-secondary hover:underline hover:underline-offset-4 decoration-transparent underline underline-offset-4"
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
