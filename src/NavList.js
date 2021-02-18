import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NavList = ({setShowLinks, showLinks}) => {

  const pathname = useLocation();

  const closeNavLinks = () => {
    setShowLinks(false);
  }

  return (
    <div className={`nav-list ${showLinks ? "active": ""}`}>
      <ul>
      <li onClick={closeNavLinks} className='primary nav-list-link'>
          <Link to='/'>Info/Projects</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{ width: pathname.pathname === "/" ? "100%" : 0 }}
            className='current-tab'
          />
        </li>
        <li onClick={closeNavLinks} className='nav-list-link'>
          <Link to='/experience'>Experience</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{
              width: pathname.pathname === "/experience" ? "100%" : 0,
            }}
            className='current-tab'
          />
        </li>
        <li onClick={closeNavLinks} className='nav-list-link'>
          <Link to='/contact'>Contact</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{ width: pathname.pathname === "/contact" ? "100%" : 0 }}
            className='current-tab'
          />
        </li>
      </ul>
    </div>
  );
};

export default NavList;