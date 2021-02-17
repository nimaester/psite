import React, { Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AboutMain from "./AboutMain";
import Contact from "./Contact";
import Skl_Edu from "./Skl_Edu";
import Nav from "./Nav";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";
import "./styles/app.scss";

const App = () => {
  const location = useLocation();
  window.onload = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1)
  }

  return (
    <Fragment>
    <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={AboutMain} />
          <Route exact path='/experience' component={Skl_Edu} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </AnimatePresence>
      <Footer/>
    </Fragment>
  );
};

export default App;
