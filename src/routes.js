import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
import Competency from "./components/Competency/Competency";
import Experience from "./components/Experience/Experience";
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path="/About" component={About} /> */}
    <Route path="/Competency" component={Competency} />
    <Route path="/Experience" component={Experience} />
  </Switch>
);
