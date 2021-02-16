import React from "react";
import { Link } from 'react-scroll';
import logo from "./img/logo.png";

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <i className="fas fa-home fa-2x"></i>
      </Link>
      <ul className='nav-bar'>
        <li className='initial'>
          <Link to='/'>Info</Link>
        </li>
        <li className='initial'>
          <Link to='/'>Projects</Link>
        </li>
        <li className='initial'>
          <Link to='education' smooth={true} duration={1000}>Experience</Link>
        </li>
        <li>
          <Link to='/#skill'>Skills</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
