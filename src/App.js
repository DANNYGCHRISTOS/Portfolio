import React, { Component } from "react";
import Main from "./components/Main/Main";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {/* <Main /> */}
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
