import { mono } from "@/pages/_app";
import config from "@/static";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-white md:p-20 p-14">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 font-khula">
        <span className="text-custom-main bg-clip-text">Hi!</span>
      </h1>
      <div className={mono.className}>
        <h2 className="text-xl md:text-lg mt-4 font-bold drop-shadow-lg shadow-black">
          I{"'"}m <span className="text-custom-main">7fx</span>, a software
          engineer from Canada
        </h2>
        <ul className="text-base md:text-lg mt-4 space-y-4">
          <li>
            <p className="text-white drop-shadow-lg shadow-black">
              I like software development{" "}
              <span className="text-custom-main">and messing with APIs</span>
            </p>
          </li>
          <li className="space-y-2">
            <p className="text-white drop-shadow-lg shadow-black">
              <a
                target="blank"
                href={`https://discord.com/users/${config.socials.discord.id}`}
                className="hover:underline text-custom-main font-semibold"
              >
                .fxx
              </a>{" "}
              on Discord
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
