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
          <section class="section-about">
            <div class="u-center-text u-margin-bottom-big" />
            <div class="row">
              <Banner />
              <div class="col-1-of-2" />
              <div class="col-1-of-2" />
            </div>

            <div class="row">
              <Cards />
              <div class="col-1-of-3" />
              <div class="col-1-of-3" />
              <div class="col-1-of-3" />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
