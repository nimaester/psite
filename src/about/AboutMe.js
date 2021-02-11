import React, { Fragment } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeAnimation,
  slideLeftAnimation,
  slideDownAnimation,
} from "../animations/animation";

const AboutMe = () => {
  const home1 = "https://ntgnrlbkt.s3-us-west-1.amazonaws.com/nim-crop.jpg";
  const controls = useAnimation();
  const [element, view] = useInView();
  if (view) {
    controls.start("show");
  }

  return (
    <Fragment>
      <motion.div
        ref={element}
        variants={slideDownAnimation}
        initial='hidden'
        animate={controls}
        className='about-me'
      >
        <h2>About Me</h2>
        <div className='cards'>
          <div className='bio'>
            <p>
              Hello there, my name is Nim Tayo. I am currently residing in
              Hayward CA and I am a software engineer with a background on
              management. I am eager to learn new things and I am a great team
              player. I've been always been fascinated with technology and that
              led me to learn how to code. It's always fun (and irritating)
              building things that I can imagine using software.
            </p>

            <p>
              Reach out to nimtayo@gmail.com to connect! Can't wait to hear from
              you.
            </p>
          </div>
          <div className='about-me-pic'>
            <img className='my-pic' src={home1} alt='' />
          </div>

        </div>
      </motion.div>
      <hr className='ab' />
    </Fragment>
  );
};

export default AboutMe;
