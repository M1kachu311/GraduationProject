import React, { Component } from "react";

import ExtensionPanelListForJobs from "../simpleComponents/ExtensionPanelListForJobs";
import IhaveAJobPopUp from "../simpleComponents/IhaveAJobPopUp";

const date = "תאריך";
const office = "משרה";
const officeKind = "סוג המשרה";
const location = "מיקום";

const optionsStyle = {
  display: "flex",
  justifyContent: "space-around"
};

const mainStyle = {
  width: "90%",
  minHeight: "500px",
  margin: "20px auto"
};

const optionsTitleStyle = {
  // margin: '10px 70px',
};

export class JobsOffer extends Component {
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
