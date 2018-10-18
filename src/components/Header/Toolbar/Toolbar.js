import React from "react";
import SideDrawer from "../SideDrawer/SideDrawer";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/"> LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
