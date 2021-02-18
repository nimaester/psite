import React from "react";
import Education from "./skills_education/Education";
import Skills from "./skills_education/Skills";
import { motion } from "framer-motion";
import { slideUpAnimation } from "./animations/animation";
import ScrollTop from "./animations/scrollTop";

const Skl_Edu = () => {
  return (
    <motion.div
      variants={slideUpAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
    <ScrollTop />
      <Skills />
      <Education />
    </motion.div>
  );
};

export default Skl_Edu;
