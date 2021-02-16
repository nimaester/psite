import React, { Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AboutMain from "./AboutMain";
import Contact from "./Contact";
import Skl_Edu from "./Skl_Edu";
import Nav from "./Nav";
import { AnimatePresence } from "framer-motion";
import "./styles/app.scss";

const App = () => {
  const location = useLocation();

  return (
    <Fragment>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={AboutMain} />
          <Route exact path='/sked' component={Skl_Edu} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
