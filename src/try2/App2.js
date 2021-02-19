import React, { Fragment, useState, useRef } from "react";
import { Route, Switch, useLocation, HashRouter } from "react-router-dom";
import AboutMain from "../about/About"
import AboutMe from "../about/AboutMe"
import Skills from "../skills_education/Skills"
import Education from "../skills_education/Education";
import Contact from "../Contact";

import Nav from "../Nav";
import Footer from "../Footer";
import { AnimatePresence } from "framer-motion";
import "../styles/app.scss";
import NavList from "../NavList";

const App = () => {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);

  const aboutMainRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Fragment>
    <Nav refs={aboutMainRef, aboutMeRef, skillsRef, educationRef, contactRef} setShowLinks={setShowLinks} showLinks={showLinks}/>
    <NavList refs={aboutMainRef, aboutMeRef, skillsRef, educationRef, contactRef} showLinks={showLinks} setShowLinks={setShowLinks}/>
      <AnimatePresence exitBeforeEnter>
        <HashRouter location={location} key={location.pathname}>
          <AboutMain ref={aboutMainRef}/>
          <AboutMe ref={aboutMeRef}/>
          <Skills ref={skillsRef}/>
          <Education ref={educationRef}/>
          <Contact ref={contactRef}/>
        </HashRouter>
      </AnimatePresence>
      <Footer/>
    </Fragment>
  );
};

export default App;

