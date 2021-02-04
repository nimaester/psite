import React, {Fragment} from 'react';
import About from './about/About';
import Services from './about//Services';
import Questions from './about/Questions';
import {motion} from 'framer-motion';
import {slideUpAnimation} from './animations/animation'

const AboutMain = () => {
  return (
    <motion.div
      variants={slideUpAnimation}
      initial="hidden"
      animate="show"
    >
      <About />
      <Services />
      <Questions />
    </motion.div>
  );
};

export default AboutMain;