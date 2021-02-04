import React, {useState} from "react";
import axios from "axios";

const Contact = () => {
  const defaultState = {
    name: "",
    email: "",
    message: "",
  };

  let [info, setInfo] = useState(defaultState);

  let handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: info,
    }).then((response) => {
      if (info.name === "" || info.email === "" || info.message === "") {
        alert("Please fill in the appropriate boxes.");
      } else if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  let resetForm = () => {
    setInfo(defaultState);
  };

  let handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='contact'>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            name='name'
            value={info.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <textarea
            className='form-control'
            rows='5'
            name='message'
            value={info.message}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
