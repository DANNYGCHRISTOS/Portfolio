import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Main.css";
class Main extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src=" " alt="avatar" className="avatar-img" />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML5/CSS | Bootstrap | JavaScript | React | Redux | NodeJS |
                Express | PostgreSQL
              </p>

              <div className="social-links">{/* LinkedIn */}</div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Main;
