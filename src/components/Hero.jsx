import React, { Suspense } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { heroPerson } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import CanvasLoader from "./Loader";

const Hero = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <div className="h-screen xl:-mt-2 mt-32 flex xl:flex-row flex-col">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className={`justify-end flex flex-row items-center gap-5 xl:w-3/5`}
        >
          <div className="flex flex-col items-center justify-center ">
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
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className={` max-w-7xl mx-auto justify-start flex items-center gap-5 xl:w-2/5`}
        >
          <img loading="lazy" src={heroPerson} />
        </motion.div>
      </div>
    </Suspense>
  );
};

export default SectionWrapper(Hero, "home");
