import React from "react";
import pxfuel from "../assets/pxfuel.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaNimblr,
  FaLinkedin,
  FaGithubAlt,
} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={pxfuel}
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/20 ">
        <div className="max-w-[700px] m-auto top-0 h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
            I am Virat Srivastava
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between  pt-6 max-w-[200px] w-full">
            <a href="https://twitter.com/iamViratSr">
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/virat-srivastava-333207202/">
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/VIRAT9358">
              <FaGithubAlt className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
