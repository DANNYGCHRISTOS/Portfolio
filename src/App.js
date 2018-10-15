import React, { Component } from "react";
import Main from "./components/Main/Main";
import { HashRouter } from "react-router-dom";
import Nav from "./components/Header/Nav";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {/* <Main /> */}
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
