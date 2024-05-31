import { mono } from "@/pages/_app";
import links from "@/static";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-white md:p-20 p-14">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 font-khula">
        <span className="bg-gradient-to-r from-white to-cum-purple text-transparent bg-clip-text">
          Hi!
        </span>
      </h1>
      <div className={mono.className}>
        <h2 className="text-xl md:text-lg mt-4">
          I{"'"}m fxx, a software engineer from Canada.
        </h2>
        <ul className="text-base md:text-lg mt-4 space-y-6">
          <li>
            <p>
              I started programming in 2019 and have since then developed a
              passion for software development. I{"'"}ve worked on various
              projects, ranging from small scripts to large-scale codebases.
            </p>
          </li>
          <li>
            <p>
              I mostly work with Golang, TypeScript and AWS, but I{"'"}m always
              eager to learn new technologies and languages.
              <br />
              <br />I{"'"}m currently working as a software engineer at{" "}
              <a
                className="transition-color text-blue-400 ease-in-out duration-200 hover:text-blue-500"
                href={links.tritan.url}
              >
                Tritan Internet
              </a>
              , where I build and maintain a plethora of web services and
              internal tools.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
