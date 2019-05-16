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
  backgroundColor: "#343A40",
  padding: "20px"
};
const navContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
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
            <h2 style={titleStyle}>מרגישים שמשהו קורה פה...</h2>
          </div>
        </div>
        <div style={navContainer}>
          <Navigation />
        </div>
      </div>
    );
  }
}

export default Header;
