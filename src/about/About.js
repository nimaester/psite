import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideDownAnimation } from "../animations/animation";

const About = () => {
  const home1 = "https://ntgnrlbkt.s3-us-west-1.amazonaws.com/nim-crop.jpg";

  const history = useHistory();

  const redirect = () => {
    let path = "/contact";
    history.push(path);
  };

  return (
    <div className='about'>
      <div className='description'>
        <motion.div className='title' variants={slideLeftAnimation}>
          <div className='hide'>
            <h2>
              I'm <motion.span variants={slideDownAnimation} style={{ color: "#0d7377" }}>Nim,</motion.span>
            </h2>
          </div>
          <div className='hide'>
            <h2>a software engineer.</h2>
            <br />
            <br />
          </div>
          <button onClick={redirect}>Contact Me</button>
        </motion.div>
      </div>
      <motion.div className='image'>
        <img src={home1} alt='' />
      </motion.div>
    </div>
  );
};

export default About;
