
import React, { forwardRef, useEffect } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import "./styles.css";
import { useRef } from "react";
import {useLocation} from "react-router-dom"

const Header = ({ refs }) => {
  const location = useLocation();

  const scrollSmoothHandler = (ref) => {
    console.log("Triggered.");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {

    switch (location.pathname) {
      case "/about":
        scrollSmoothHandler(refs.aboutRef);
        break;
      case "/contact":
        scrollSmoothHandler(refs.contactRef);
        break;
      case "/hero":
        scrollSmoothHandler(refs.heroRef);
        break;

      default:
      // ignore
    }
  }, [location, refs]);


  return (
    <>
      <NavLink to="/hero" activeClassName="selected">
        Hero
      </NavLink>
      <NavLink to="/about" activeClassName="selected">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="selected">
        Contact
      </NavLink>
    </>
  );
};

const Hero = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1>Hero Section</h1>
    </section>
  );
});

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1>About Section</h1>
    </section>
  );
});

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1>Contact Section</h1>
    </section>
  );
});

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <HashRouter>
        <Header refs={{ aboutRef, contactRef, heroRef }} />
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
      </HashRouter>
    </div>
  );
}

export default App;