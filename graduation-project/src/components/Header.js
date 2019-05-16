import React, { Component } from "react";
import Navigation from "./Navigation";
import logo from "../images/logo.png";

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "rigth"
};

const titleStyle = {
  fontSize: "15px",
  color: "#fff"
};

const logoStyle = {
  width: 180,
  height: 100
};

const logoDisplay = {
  margin: "auto 0"
};

const headerDisplay = {
  display: "flex",
  backgroundColor: "#343A40"
};

const logoAltText = "לוגו מרכז צעירים ירוחם";

export class Header extends Component {
  render() {
    return (
      <div style={headerDisplay}>
        <div style={headerStyle}>
          <div style={logoDisplay}>
            <img src={logo} alt={logoAltText} style={logoStyle} />
          </div>
          <div>
            <h2 style={titleStyle}>מרגישים שמאשהו קורה כאן</h2>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Header;
