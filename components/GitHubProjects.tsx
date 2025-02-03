"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  fork: boolean;
  html_url: string;
}

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setRepos([]);
        }
      })
      .catch(console.error);
  }, []);

  if (!Array.isArray(repos) || repos.length === 0) {
    return null;
  }

  return (
    <motion.section className="mb-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl font-bold inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent drop-shadow-lg shadow-black"
      >
        Projects
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-2 space-y-4 list-none ml-0"
      >
        {repos.map((repo, index) => (
          <motion.li
            key={repo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.2 }}
            className="text-base md:text-lg text-white grid grid-cols-[220px_1fr] gap-2"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-custom-main transition-all duration-300 hover:text-custom-secondary hover:decoration-custom-secondary hover:underline hover:underline-offset-4 decoration-transparent underline underline-offset-4"
            >
              {repo.name}
            </a>
            <span>
              {repo.description || "No description"}
              {repo.name.toLowerCase() === "vs" && (
                <span className="italic"> (This site)</span>
              )}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

export default Projects;
