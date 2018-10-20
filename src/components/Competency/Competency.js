import React, { Component } from "react";
import "./Competency.css";
class Education extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <div className="technology">technologies</div>
          <div className="interpersonal">interpersonal skills</div>
          <div className="industry">industry knowladge</div>
          <div className="frontend">frontend</div>
          <div className="backend">backend</div>
        </div>
        <div className="parent">
          <h1>EXPERIENCE</h1>
        <div className="experience">experience</div>
        <div className="volunteer">experience</div>
        <div className="honors">Honors and Awards</div>
        <div className="languages">Languages</div>
      </div>
      </div>
    );
  }
}

export default Education;
