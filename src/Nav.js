import React from "react";
import { Link } from "react-router-dom";
import ghLogo from "./img/ghLogo.png";
import linkLogo from "./img/linkLogo.png";

const Nav = () => {
  return (
    <nav>
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

      <ul className='links'>
        <li>
          <a href='https://www.linkedin.com/in/nimtayo/'>
            <img src={linkLogo} alt='' />
          </a>
        </li>
        <li>
          <a href='https://github.com/nimaester'>
            <img src={ghLogo} alt='' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
