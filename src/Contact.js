import React from "react";
import emailjs from 'emailjs-com';
import { slideUpAnimation } from "./animations/animation";
import { motion } from "framer-motion";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_1fnqpcr", e.target, "user_7q9goxLOYdywpMLHQQLe3")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
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
        <label>Name</label>
        <input type='text' name='name' />
        <label>Email</label>
        <input type='email' name='email' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form>
    </motion.div>
  );
};

export default Contact;
