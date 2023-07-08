import React from "react";
import { styles } from "../styles";
import { heroPerson } from "../assets";

const Hero = () => {
  return (
    <div className="h-screen mx-auto flex xl:flex-row flex-col pt-20">
      <div
        className={`${styles.paddingX}  justify-end flex flex-row items-center gap-5 xl:w-3/5`}
      >
        <div className="flex flex-col items-center justify-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Nanak</span>
          </h1>
          <span className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full-stack applications for the web & web3
          </span>
        </div>
      </div>
      <div
        className={`${styles.paddingX}  max-w-7xl mx-auto justify-start flex items-center gap-5 xl:w-2/5`}
      >
        <img loading="lazy" src={heroPerson} />
      </div>
    </div>
  );
};

export default Hero;
