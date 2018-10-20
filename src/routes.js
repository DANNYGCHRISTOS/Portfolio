import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
import Competency from "./components/Competency/Competency";
import Education from "./components/Education/Education";
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path="/About" component={About} /> */}
    <Route path="/Competency" component={Competency} />
    <Route path="/Education" component={Education} />
  </Switch>
);
