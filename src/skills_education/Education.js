import React from "react";
import hrlogo from "../img/hrlogo.png";
import ccsflogo from "../img/ccsflogo.png";

const Education = () => {
  return (
    <div className='education'>
      <h2 className="title">Education</h2>
      <div className='education-container'>
        <div className='name-of-org'>
          <a href='https://bit.ly/3pIwnUt'>
            <img className='edu-img' src={hrlogo} alt='' />
          </a>
        </div>
        <h4>Software Engineering Immersive, San Francisco</h4> <h4>(2020-2020)</h4>
        <p className='desc-org'>
          -Immersive coding school with a 3% acceptance rate.
        </p>
        <p className='desc-org'>
          -Over 1000+ hours of coding in a collaborative environment with a
          range of different full-stack projects.
        </p>
      </div>

      <div className='education-container'>
        <div className='name-of-org'>
          <a href='https://www.ccsf.edu/'>
            <img className='edu-img' src={ccsflogo} alt='' />
          </a>
        </div>
        <h4>Business Management, San Francisco</h4>
        <h4>(2011-2013)</h4>
        <p className='desc-org'>
          -Excelled in accounting and budgeting classess
        </p>
      </div>

      <div className='education-container'>
        <div className='name-of-org'>
          <h2>Online Courses</h2>
        </div>
        <div className='certs'>
          <a href='https://www.udemy.com/certificate/UC-ce06ce8f-5916-4795-b4c6-04da02d1c8ac/'>
            <p className='ol-school'>Modern Javascript Bootcamp</p>
            <p className='ol-school'>(2020-2020)</p>
          </a>
        </div>
        <div className='certs'>
          <a href='https://www.udemy.com/certificate/UC-ce84e631-8982-4471-9d4c-ac239694ef93/'>
            <p className='ol-school'>Learn to Code with Ruby</p>
            <p className='ol-school'>(2020-2020)</p>
          </a>
        </div>
      </div>

      <p className='quotes'>
        {" "}
        "Education is a progressive discovery of our own ignorance."
      </p>
      <p className='quotee'>-- Will Durant</p>
    </div>
  );
};

export default Education;
