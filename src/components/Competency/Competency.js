import React, { Component } from "react";
import "./Competency.css";
class Education extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <img src="" alt="" />
          <h1>COMPETENCIES</h1>
          <div className="technology">technologies</div>
          <div className="interpersonal">interpersonal skills</div>
          <div className="industry">industry knowladge</div>
          <div className="frontend">
            <div className="react">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
                alt=""
                id="react"
                width="50px"
                height="50px"
              />
            </div>
            <div className="html">
              {" "}
              <img
                src="https://banner2.kisspng.com/20180312/uwe/kisspng-html-logo-world-wide-web-consortium-font-family-html-tag-vector-5aa605600e1f78.1403783915208297920579.jpg"
                alt=""
                id="react"
                width="50px"
                height="50px"
              />
            </div>
            <div className="sass">
              {" "}
              <img
                src="https://www.abeautifulsite.net/uploads/2017/02/sass.png?width=600&key=a18980ed50ba77f256a580d00ba54a8fe80d85f7a96bbe3ff3463890acc91fca"
                alt=""
                id="react"
                width="50px"
                height="50px"
              />
            </div>
            <div className="css">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png"
                alt=""
                id="react"
                width="50px"
                height="50px"
              />
            </div>
            <div className="redux">
              {" "}
              <img
                src="https://cdn-images-1.medium.com/max/614/1*SRL22ADht1NU4LXUeU4YVg.png"
                alt=""
                id="react"
                width="50px"
                height="50px"
              />
            </div>
          </div>
          <div className="backend">
            <div className="node">
              <img
                src="http://www.neginet.com/wp-content/uploads/2018/03/nodejs-logo.png"
                alt=""
                id="node"
                width="50px"
                height="50px"
              />
            </div>
            <div className="express">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                alt=""
                id="express"
                width="100px"
                height="40px"
              />
            </div>
            <div className="psql">
              {" "}
              <img
                src="https://risingstack-blog.s3.amazonaws.com/2016/Jun/Node_js_database_example_PostgreSQL_1461672928728-1466683645768.png"
                alt=""
                id="psql"
                width="100px"
                height="50px"
              />
            </div>
          </div>

          <div className="parent">
            <h1>EXPERIENCE</h1>
            <div className="experience">experience</div>
            <div className="volunteer">volunteer</div>
            <div className="honors">Honors and Awards</div>
            <div className="languages">Languages</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
