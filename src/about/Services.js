import React from "react";
import home2 from "../img/home2.png";

const Services = () => {
  return (
    <div className='services'>
      <div className='description'>
        <h2>
          High <span style={{ color: "#0d7377" }}>Quality</span> services
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
            <i className="fas fa-tachometer-alt fa-3x"></i>
              <h3> Efficient</h3>
            </div>
            <p>Aliqua eiusmod nulla sit enim incididunt</p>
          </div>
          <div className='card'>
            <div className='icon'>
            <i className="fas fa-users fa-3x"></i>
              <h3> Teamwork</h3>
            </div>
            <p>Occaecat Lorem excepteur ipsum duis</p>
          </div>
          <div className='card'>
            <div className='icon'>
            <i className="fas fa-chart-pie fa-3x"></i>
              <h3> Diaphragm</h3>
            </div>
            <p>Aliquip consectetur proident incididunt</p>
          </div>
          <div className='card'>
            <div className='icon'>
            <i className="fas fa-money-bill-wave fa-3x"></i>
              <h3> Money</h3>
            </div>
            <p>Lorem Lorem in cupidatat est</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src={home2} alt='' />
      </div>
    </div>
  );
};

export default Services;
