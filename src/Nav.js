import React from "react";
import { Link } from 'react-router-dom';
// import logo from "./img/logo.png";

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <i className="fas fa-home fa-2x"></i>
      </Link>
      <ul className='nav-bar'>
        <li>
          <Link to='/'>Info/Projects</Link>
        </li>
        <li>
          <Link to='/experience'>Experience</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
