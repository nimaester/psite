import React from "react";
import emailjs from "emailjs-com";
import { slideUpAnimation, fadeAnimation } from "./animations/animation";
import { motion } from "framer-motion";
import ScrollTop from "./animations/scrollTop";

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_1fnqpcr",
        event.target,
        "user_7q9goxLOYdywpMLHQQLe3"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setSent(true); for animation later
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <motion.div
      className='contact'
      variants={slideUpAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
    <ScrollTop />
      <form className='contact-form' onSubmit={sendEmail}>
        <div className='name'>
        <motion.h2 variants={fadeAnimation} >Contact Me</motion.h2>
          <input
            className='input-name'
            spellCheck='false'
            placeholder='Your Name'
            type='text'
            name='name'
            required
          />
        </div>

        <div className='email'>
          <input
            className='input-email'
            spellCheck='false'
            placeholder='Your Email'
            type='email'
            name='email'
            required
          />
        </div>

        <div className='message'>
          <textarea
            className='input-message'
            spellCheck='false'
            placeholder='Your Message'
            name='message'
            required
          />
        </div>
        <div>
          <input className='send' type='submit' value='Send' />
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
