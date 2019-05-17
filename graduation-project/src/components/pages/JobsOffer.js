import React, { Component } from "react";

import ExtensionPanelListForJobs from "../simpleComponents/ExtensionPanelListForJobs";
import IhaveAJobPopUp from "../simpleComponents/IhaveAJobPopUp";

const date = "תאריך";
const office = "משרה";
const officeKind = "סוג המשרה";
const location = "מיקום";

const optionsStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#43A4BB"
};

const mainStyle = {
  width: "90%",
  minHeight: "500px",
  margin: "20px auto",
  borderRadius: "5px",
  boxShadow:
    "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
};

const optionsTitleStyle = {
  // margin: '10px 70px',
};

export class JobsOffer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={mainStyle}>
        <div style={optionsStyle}>
          <p style={optionsTitleStyle}>{date}</p>
          <p style={optionsTitleStyle}>{office}</p>
          <p style={optionsTitleStyle}>{officeKind}</p>
          <p style={optionsTitleStyle}>{location}</p>
          <IhaveAJobPopUp />
        </div>
        <ExtensionPanelListForJobs />
      </div>
    );
  }
}

export default JobsOffer;
