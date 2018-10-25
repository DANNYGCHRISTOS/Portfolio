import React, { Component } from "react";
import "../sass/Style.scss";
import { Link } from "react-router-dom";
class Cards extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Contact Me!</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      Facebook!
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <p>
                        All information about me you can contact me on Facebook
                      </p>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">One Click Away</p>
                      <p className="card__price-value" />
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      Github
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <p>You can see my projects</p>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">One Click Away</p>
                      <p className="card__price-value" />
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      Linkedin
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <p>You can view my Resume on Linkedin</p>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">One Click Away</p>
                      <p className="card__price-value" />
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Linkedin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cards;
