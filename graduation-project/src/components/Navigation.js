import React, { Component } from "react";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  listStyleType: "none"
};

const navElementStyle = {
  padding: "10px"
};

const linkStyle = {
  color: "#C7D72B",
  textDecoration: "none",
  cursor: "pointer"
};

export class Navigation extends Component {
  render() {
    return (
      <div>
        <ul style={navStyle}>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/">
              בית
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/about">
              אודות
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/contact">
              צור קשר
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/page1">
              מרכז צעירים
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/page2">
              התיישבות
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/page3">
              צמצום פערים
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/page4">
              כולנא
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/page5">
              בשביל הקהילה
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
