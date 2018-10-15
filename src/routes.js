import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/Main/Main";
import About from "./components/About/About";

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/About" component={About} />
  </Switch>
);
