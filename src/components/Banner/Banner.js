import React, { Component } from "react";
import "../sass/Style.scss";
import { Link } from "react-router-dom";
class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="header__logo-box">
          {/* <img src={hero} alt="hero" /> */}
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Portfolio</span>
            <span className="heading-primary--sub">My competencies!</span>
          </h1>
          <Link to="/About">
            <button
              className="#section-tours"
              className="btn btn--white btn--animated"
            >
              Explore
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Banner;
