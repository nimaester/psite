import React, { Fragment } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideDownAnimation } from "../animations/animation";
import fbLogo from "../img/fb.png";
import linkLogo from "../img/linkin.png";
import face from "../img/face.png";

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
        <h2>Personal Info</h2>
        <div className='cards'>
          <div className='bio'>
            <p>
              Hello there, my name is Nim Tayo. I am currently residing in
              Hayward CA and I am a software engineer with a background on
              management. I am eager to learn new things and I am a great team
              player. I've been always been fascinated with technology and that
              led me to learn how to code. It's always fun building things that
              I can imagine using software.
            </p>


          </div>
          <div className='about-me-pic'>
            <img className='my-pic' src={face} alt='' />
          </div>
          <div className='full-bio'>
            <h4>Name:</h4>
            <p>Nim Tayo</p>

            <h4>Date of Birth:</h4>
            <p>07/26/1987</p>

            <h4>Location:</h4>
            <p>Hayward California, USA</p>
          </div>
        </div>
        <p className='foot'>Let's connect! Can't wait to hear from you.</p>
            <div className='links'>
              <a href='https://www.facebook.com/nim.tayo.12'>
                <img className='primary-icon' src={fbLogo} alt='' />
              </a>
              <a href='https://www.linkedin.com/in/nimtayo/'>
                <img src={linkLogo} alt='' />
              </a>
            </div>
            <p className='quotes'>
      “Be yourself; everyone else is already taken.”
      </p>
      <p className='quotee'>-- Oscar Wilde</p>
      <hr className='ab' />
      </motion.div>
    </Fragment>
  );
};

export default AboutMe;

