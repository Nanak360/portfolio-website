import React from "react";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      className={
        "w-full h-16 flex items-center z-20 backdrop-filter backdrop-blur-sm bg-opacity-40 border-t border-tertiary drop-shadow-lg"
      }
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://nanakcodes.com/" className="hover:underline">
            NanakCodes™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/nanakbandyopadhyay/"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6 "
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Nanak360"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              GitHib
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/NBandyopadhyay"
              className="mr-4 hover:underline md:mr-6"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1l8mSV_G-sfYq5fn66oDLCqjveUouyPB3/view?usp=sharing"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View my Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
