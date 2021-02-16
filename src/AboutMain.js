import React from 'react';
import About from './about/About';
import AboutMe from './about/AboutMe';
import {motion} from 'framer-motion';
import {slideUpAnimation} from './animations/animation'
// import Services from './about/Services'
import Contact from "./Contact";
import Skills from "./skills_education/Skills"
import Education from "./skills_education/Education";


const AboutMain = () => {
  return (
    <motion.div
      variants={slideUpAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About />
      <AboutMe />
      <Skills />
      <Education />
      <Contact />
    </motion.div>
  );
};

export default AboutMain;