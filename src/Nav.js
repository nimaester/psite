import React from "react";
import { Link } from 'react-router-dom';
// import logo from "./img/logo.png";
import {motion} from "framer-motion"
import {useLocation} from "react-router-dom";

const Nav = () => {

  const pathname = useLocation();
  console.log(pathname)


  return (
    <nav>
      <Link to='/'>
        <i className="fas fa-home fa-2x"></i>
      </Link>
      <ul className='nav-bar'>
        <li className='primary'>
          <Link to='/'>Info/Projects</Link>
          <motion.div transition={{duration: 0.75}}
          animate={{width: pathname.pathname === '/' ? "100%" : 0}}
          className="current-tab" />
        </li>
        <li>
          <Link to='/experience'>Experience</Link>
          <motion.div transition={{duration: 0.75}}
          animate={{width: pathname.pathname === '/experience' ? "100%" : 0 }} className="current-tab" />
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
          <motion.div
          transition={{duration: 0.75}}
          animate={{width: pathname.pathname === '/contact' ? "100%" : 0 }}
          className="current-tab" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
