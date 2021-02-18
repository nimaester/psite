import React, { Fragment, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AboutMain from "./AboutMain";
import Contact from "./Contact";
import SkillEdMain from "./SkilEdMain";
import Nav from "./Nav";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";
import "./styles/app.scss";
import NavList from "./NavList";
const App = () => {
  const location = useLocation();

  window.onload = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 5)
  }

  const [showLinks, setShowLinks] = useState(false);

  return (
    <Fragment>
    <Nav setShowLinks={setShowLinks} showLinks={showLinks}/>
    <NavList showLinks={showLinks} setShowLinks={setShowLinks}/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={AboutMain} />
          <Route exact path='/experience' component={SkillEdMain} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </AnimatePresence>
      <Footer/>
    </Fragment>
  );
};

export default App;
