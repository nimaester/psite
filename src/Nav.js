import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <img className='logo' src={logo} alt='' />
      </Link>
      <ul className='nav-bar'>
        <li className='initial'>
          <Link to='/'>Info & Projects</Link>
        </li>
        <li>
          <Link to='/skills&education'>Skills & Education</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
