import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return <p>{title}</p>;
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am very passionate about programming. I have done a few projects which
        includes Coding with Python and JavaScript. Currently, i am pursuing
        B-tech Computer Science and Engineering at University of Engineering and
        Management, Kolkata. Apart from that my interests are playing various
        musical instruments like guitar, harmonica, tabla etc
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
