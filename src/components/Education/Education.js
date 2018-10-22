import React, { Component } from "react";
import "./Education.css";
class Education extends Component {
  state = {};
  render() {
    return (
      <div className="econtainer">
        <div className="university">
          <h1>MEKELLE UNIVERSITY</h1>
          <img
            src="http://www.mu.edu.et/images/mulogo.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>BSC IN ELECTRICAL AND COMPUTER ENGINEERING</p>
        </div>
      </div>
    );
  }
}

export default Education;
