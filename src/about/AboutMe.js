import React, { Fragment } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideDownAnimation } from "../animations/animation";
import fbLogo from "../img/fb.png"
import linkLogo from "../img/linkin.png"

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
              led me to learn how to code. It's always fun
              building things that I can imagine using software.
            </p>

            <p>
              Let's connect! Can't wait to hear from you.
            </p>
            <div className="links">
            <a href="https://www.facebook.com/nim.tayo.12">
              <img className="primary-icon" src={fbLogo} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/nimtayo/">
              <img src={linkLogo} alt="" />
            </a>
          </div>
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
