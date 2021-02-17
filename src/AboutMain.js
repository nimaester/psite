import React from "react";
import About from "./about/About";
import AboutMe from "./about/AboutMe";
import { motion } from "framer-motion";
import { slideUpAnimation } from "./animations/animation";
import ScrollTop from "./animations/scrollTop";

const AboutMain = () => {
  return (
    <motion.div
      variants={slideUpAnimation}
      initial='hidden'
      animate='show'
      exit="exit"
    >
      <ScrollTop />
      <About />
      <AboutMe />
    </motion.div>
  );
};

export default AboutMain;
