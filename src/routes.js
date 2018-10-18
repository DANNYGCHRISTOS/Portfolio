import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/About" component={About} />
    <Route path="/Education" component={Education} />
    <Route path="/Experience" component={Experience} />
  </Switch>
);
