import React from "react";
import csguy from "../img/csguy.png"
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideDownAnimation, fadeAnimation } from "../animations/animation";

const About = () => {
  const home1 = "https://ntgnrlbkt.s3-us-west-1.amazonaws.com/nim-crop.jpg";
  const background = "https://www.wallpapertip.com/wmimgs/237-2372006_cybersecurity-wallpaper.jpg"

  const history = useHistory();

  const redirect = () => {
    let path = "/contact";
    history.push(path);
  };

  return (
    <div className="ab">
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
      <hr />
    </div>
  );
};

export default About;
