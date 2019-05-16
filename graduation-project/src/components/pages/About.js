import React, { Component } from "react";
import AboutUsPaperSheet from "../simpleComponents/AboutUsPaperSheet";
import PersonnelDataPaperSheet from "../simpleComponents/PersonnelDataPaperSheet";

export class About extends Component {
  render() {
    return (
      <div>
        <AboutUsPaperSheet />
        <PersonnelDataPaperSheet />
      </div>
    );
  }
}

export default About;
