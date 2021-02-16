import React from "react";
import Education from "./skills_education/Education";
import Skills from "./skills_education/Skills";
import { motion, useAnimation } from "framer-motion";
import { slideUpAnimation } from "./animations/animation";
import { useInView } from "react-intersection-observer";



const Skl_Edu = () => {

  const controls = useAnimation();
  const [element, view] = useInView();

  view && controls.start("show")

  return (
    <motion.div
      variants={slideUpAnimation}
      initial='hidden'
      animate={controls}
      exit='exit'>
      <Skills />
      <Education />
    </motion.div>
  );
};

export default Skl_Edu;
