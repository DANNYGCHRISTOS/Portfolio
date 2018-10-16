import React, { Component } from "react";
import { Provider } from "react-redux";
// import Main from "./components/Main/Main";
import { HashRouter } from "react-router-dom";
import Nav from "./components/Header/Nav";
import routes from "./routes";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Nav />
            {/* <Main /> */}
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
