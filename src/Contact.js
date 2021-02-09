import React from "react";
import emailjs from "emailjs-com";
import { slideUpAnimation } from "./animations/animation";
import { motion } from "framer-motion";

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
      <form className='contact-form' onSubmit={sendEmail}>
        <div className='name'>
          <h2>Name</h2>
          <input className="input-name" type='text' name='name' />
        </div>

        <div className='email'>
          <h2>Email</h2>
          <input className="input-email" type='email' name='email' />
        </div>

        <div className='message'>
          <h2>Message</h2>
          <textarea className="input-message" name='message' />
        </div>
        <div className='send'>
          <input type='submit' value='Send' />
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
