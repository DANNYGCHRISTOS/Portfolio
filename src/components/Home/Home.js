import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="boxone">
            <p>box one</p>
            <img
              src="http://www.pngmart.com/files/1/Open-Book-Transparent-Background-PNG.png"
              alt="" width="100px" height="100px"
            />
          </div>
          <div className="boxtwo">
            <h2>FRONT END DEVELOPMENT</h2>
            <p>
              For the Front-End I use the mob first design approach. and this
              are my weapons!
            </p>
            <div className="frontend">
              <div className="react">
                {" "}
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
          </div>
          <div className="boxthree">
            <h1>third box</h1>
          </div>
        </div>
        <div className="parent">
          <div className="child1">child1</div>
          <div className="child2">child2</div>
          <div className="child3">child3 </div>
          <div className="child4">child4</div>
        </div>
      </div>
    );
  }
}

export default Home;
