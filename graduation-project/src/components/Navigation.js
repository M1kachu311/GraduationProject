import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navigation.css'

const navStyle = {
  display: "flex",
  listStyleType: "none"
};

const navElementStyle = {
  padding: "30px"
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
            <Link style={linkStyle} to="/jobs">
              <p className='hover'>לוח משרות</p>
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/realEstate">
              <p className='hover'>לוח דיור</p>
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/about">
            <p className='hover'>אודות</p>
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/youthCenter">
              <p className='hover'>מרכז צעירים</p>
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle}  to="/settlement">
              <p className='hover'>התיישבות</p>
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/reducingGaps">
              <p className='hover'>צמצום פערים</p>
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/kolna">
              <p className='hover'>כולנא</p>
            </Link>
          </li>
          <li style={navElementStyle}>
            <Link style={linkStyle} to="/forTheCommunity">
              <p className='hover'>בשביל הקהילה</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
