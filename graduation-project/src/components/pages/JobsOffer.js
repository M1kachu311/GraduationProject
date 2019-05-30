import React, { Component } from "react";
import styled from "styled-components";

import ExtensionPanelListForJobs from "../simpleComponents/ExtensionPanelListForJobs";
import IhaveAJobPopUp from "../simpleComponents/IhaveAJobPopUp";

const date = "תאריך";
const office = "משרה";
const officeKind = "סוג המשרה";
const location = "מיקום";

const OptionsStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #43A4BB;
`;

const mainStyle = {
  width: "90%",
  minHeight: "500px",
  margin: "20px auto",
  borderRadius: "5px",
  boxShadow:
    "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
};

const CategoryTitle = styled.p`
  @media (max-width: 540px) {
    opacity: 0;
  }
`;

export class JobsOffer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={mainStyle}>
        <OptionsStyle>
          <CategoryTitle>{office}</CategoryTitle>
          <CategoryTitle>{officeKind}</CategoryTitle>
          <CategoryTitle>{location}</CategoryTitle>
          <CategoryTitle>{date}</CategoryTitle>
          <IhaveAJobPopUp />
        </OptionsStyle>
        <ExtensionPanelListForJobs />
      </div>
    );
  }
}

export default JobsOffer;
