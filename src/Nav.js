import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png"

const Nav = () => {
  return (
    <nav>
    <img className="logo" src={logo} alt="" />
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

// <ul className='links'>
//         <li>
//           <a href='https://www.linkedin.com/in/nimtayo/'>
//             <img src={linkLogo} alt='' />
//           </a>
//         </li>
//         <li>
//           <a href='https://github.com/nimaester'>
//             <img src={ghLogo} alt='' />
//           </a>
//         </li>
//       </ul>