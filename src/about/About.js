import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { slideLeftAnimation, fadeAnimation } from "../animations/animation";


const About = () => {

  const history = useHistory();
  const redirect = () => {
    let path = "/contact";
    history.push(path);
  };

  return (
    <div>
    <div className='about'>
      <div className='description'>
        <motion.div className='title' variants={slideLeftAnimation}>
          <div className='hide'>
            <h2>
              I'm <motion.span variants={fadeAnimation} style={{ color: "#0d7377" }}>Nim,</motion.span>
            </h2>
          </div>
          <div className='hide'>
            <h2>a software engineer.</h2>
            <br />
            <br />
          </div>
          <motion.button variants={fadeAnimation} onClick={redirect}>Contact Me</motion.button>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default About;
