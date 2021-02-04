import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMain from "./AboutMain";
import Contact from "./Contact";
import Skl_Edu from "./Skl_Edu";
import Nav from "./Nav";
import {AnimatePresence} from "framer-motion";
import "./styles/app.scss"

const App = () => {
  return (
    <Router>
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={AboutMain} />
          <Route exact path="/skills&education" component={Skl_Edu} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
