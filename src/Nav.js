import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// <img className="logo" src={logo} alt="" />

// <Link to='/'>
//   <i className='fas fa-home fa-2x'></i>
// </Link>

const Nav = ({ setShowLinks, showLinks }) => {
  const pathname = useLocation();

  const closeNavLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <Link to='/'>
        <i className='fas fa-home fa-2x'></i>
      </Link>
      <ul className='nav-bar'>
        <li className='primary nav-link'>
          <Link to='/'>Info/Projects</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{ width: pathname.pathname === "/" ? "100%" : 0 }}
            className='current-tab'
          />
        </li>
        <li className='nav-link'>
          <Link to='/experience'>Experience</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{
              width: pathname.pathname === "/experience" ? "100%" : 0,
            }}
            className='current-tab'
          />
        </li>
        <li className='nav-link'>
          <Link to='/contact'>Contact</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{ width: pathname.pathname === "/contact" ? "100%" : 0 }}
            className='current-tab'
          />
        </li>
        <div className='burger-icon'>
          <i
            className={`${
              showLinks ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"
            }`}
            onClick={closeNavLinks}
          ></i>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
