import React, { Component } from "react";
import "./Home.css";
import hero from "../../Images/hero.jpg";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img src={hero} alt="hero" />
        </div>
        <div className="parent">
          <div className="child1">child1</div>
        </div>
      </div>
    );
  }
}

export default Home;
