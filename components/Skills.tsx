import { mono } from "@/pages/_app";
import config from "@/static";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white md:p-20 p-14"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 font-khula"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-custom-main bg-clip-text">Technical Skills</span>
      </motion.h1>
      <div className={mono.className}>
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-lg mt-4 text-custom-main font-bold drop-shadow-lg shadow-black"
          >
            Languages
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg mt-4 space-y-2"
          >
            {config.technical.languages.map((language) => (
              <motion.li key={language} whileHover={{ x: 10 }}>
                {language}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-lg mt-8 text-custom-main font-bold drop-shadow-lg shadow-black"
          >
            Frameworks & Tools
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg mt-4 space-y-2"
          >
            {config.technical.frameworks.map((framework) => (
              <motion.li key={framework} whileHover={{ x: 10 }}>
                {framework}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-lg mt-8 text-custom-main font-bold drop-shadow-lg shadow-black"
          >
            Additional Skills
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg mt-4 space-y-2"
          >
            {config.technical.additional.map((additional) => (
              <motion.li key={additional} whileHover={{ x: 10 }}>
                {additional}
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>
    </motion.div>
  );
}

export default Skills;
