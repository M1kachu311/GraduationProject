import React, { Component, Fragment } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

import Navigation from "./Navigation";
import TemporaryDrawer from './simpleComponents/TemporaryDrawer'

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "rigth"
};

const headerStyleMobile = {
  display: 'flex',
  justifyContent: 'space-between'
}

const logoStyle = {
  width: 135,
  height: 75
};

const logoStyleMobile = {
  width: '80px',
  height: 45
};

const logoDisplay = {
  margin: "auto 0"
};

const headerDisplay = {
  display: "flex",
  backgroundColor: "#343A40",
  padding: "10px",
  justifyContent: 'center'
};
const headerDisplayMobile = {
  backgroundColor: "#343A40",
  padding: "10px",
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
      <Fragment>
        <MediaQuery minWidth={1039}>
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
        </MediaQuery>

        <MediaQuery minWidth={841} maxWidth={1038}>
          <div style={headerDisplayMobile}>
            <div style={headerStyleMobile}>
              <TemporaryDrawer />
              <Link to="/">
                  <div>
                    <img src={logo} alt={logoAltText} style={logoStyleMobile} />
                  </div>
              </Link>
            </div>
          </div>
        </MediaQuery>


        <MediaQuery  maxWidth={840}>
          <div style={headerDisplayMobile}>
            <div style={headerStyleMobile}>
              <TemporaryDrawer />
              <Link to="/">
                  <div>
                    <img src={logo} alt={logoAltText} style={logoStyleMobile} />
                  </div>
              </Link>
            </div>
          </div>
        </MediaQuery>
      </Fragment>
    );
  }
}

export default Header;
