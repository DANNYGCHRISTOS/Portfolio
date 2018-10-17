import React, { Component } from "react";
import Main from "./components/Main/Main";
import { HashRouter } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navigation />
          <Main />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
