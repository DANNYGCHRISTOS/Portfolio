import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="boxone">
          <img src="http://www.toca-ch.com/data/walls/48/22979825.jpg" alt="" width="100%" height="300px"/>
        </div>
        <div className="boxtwo">
          <h2>FRONT END DEVELOPMENT</h2>
          <p>
            For the Front-End I follow the mob first design approach and this
            are my weapons!
          </p>
          <div className="icons" />
        </div>
        <div className="boxthree">
          <h1>third box</h1>
        </div>
      </div>
    );
  }
}

export default Home;
