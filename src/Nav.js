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
          <Link to='/'>Info</Link>
        </li>
        <li className='initial'>
          <Link to='/'>Projects</Link>
        </li>
        <li className='initial'>
          <Link to='/'>Experience</Link>
        </li>
        <li>
          <Link to='/sked'>Skills</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
