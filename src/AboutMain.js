import React from 'react';
import About from './about/About';
// import Services from './about//Services';
// import Questions from './about/Questions';
import {motion} from 'framer-motion';
import {slideUpAnimation} from './animations/animation'

const AboutMain = () => {
  return (
    <motion.div
      variants={slideUpAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About />
    </motion.div>
  );
};

export default AboutMain;