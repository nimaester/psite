import React from "react";
import {useHistory} from "react-router-dom"
import { motion } from "framer-motion";

const About = () => {

  const home1 = "https://ntgnrlbkt.s3-us-west-1.amazonaws.com/nim-crop.jpg";

  const history = useHistory();

  const redirect = () => {
    let path = '/contact';
    history.push(path)
  }

  return (
    <div className='about'>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <motion.h2>
              I'm <span style={{ color: "#0d7377" }}>Nim</span>,
            </motion.h2>
          </div>
          <div className='hide'>
            <motion.h2>
              a software engineer.
            </motion.h2>
            <br/>
            <br/>
          </div>
          <motion.button onClick={redirect} >
            Contact Me
          </motion.button>
        </div>
      </div>
      <motion.div className='image'>
        <img src={home1} alt='' />
      </motion.div>
    </div>
  );
};

export default About;

  // const motion1 = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 0.5 } },
  // };

  // const motion2 = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 1.5 } },
  // };

  // const motion3 = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2.5 } },
  // };