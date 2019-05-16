import React, { Component } from "react";
import Navigation from "./Navigation";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

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
  width: 135,
  height: 75
};

const logoDisplay = {
  margin: "auto 0"
};

const headerDisplay = {
  display: "flex",
  backgroundColor: "#343A40",
  padding: "10px"
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
          <Link to="/">
            <div style={logoDisplay}>
              <img src={logo} alt={logoAltText} style={logoStyle} />
            </div>
          </Link>
        </div>
        <div style={navContainer}>
          <Navigation />
        </div>
      </div>
    );
  }
}

export default Header;
