import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner";
import "../sass/Style.scss";
class Home extends Component {
  render() {
    return (
      <div>
        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big" />
            <div className="row">
              <Banner />
              <div className="col-1-of-2" />
              <div className="col-1-of-2" />
            </div>

            <div className="row">
              <Cards />
              <div className="col-1-of-3" />
              <div className="col-1-of-3" />
              <div className="col-1-of-3" />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
