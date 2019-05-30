import React, { Component } from "react";
import styled from "styled-components";

import ExtensionPanelListForRealEstate from "../simpleComponents/ExtensionPanelListForRealEstate";
import SugestRealEstate from "../simpleComponents/SugestRealEstate";

const salleOrRent = "מכירה/השכרה";
const type = "סוג הנכס";
const rooms = "מס׳ חדרים";
const floor = "קומה";
const adrdess = "כתובת";
const price = "מחיר";
const date = "תאריך";

const OptionsStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #43A4BB;
  @media (max-width: 840px) {
    justify-content: flex-end;
  }
`;

const CategoryTitle = styled.p`
  @media (max-width: 840px) {
    display: none;
  }
`;

const mainStyle = {
  width: "90%",
  minHeight: "500px",
  margin: "20px auto",
  borderRadius: "5px",
  boxShadow:
    "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
};

export class RealEstate extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={mainStyle}>
        <OptionsStyle>
          <CategoryTitle>{salleOrRent}</CategoryTitle>
          <CategoryTitle>{type}</CategoryTitle>
          <CategoryTitle>{rooms}</CategoryTitle>
          <CategoryTitle>{floor}</CategoryTitle>
          <CategoryTitle>{adrdess}</CategoryTitle>
          <CategoryTitle>{price}</CategoryTitle>
          <CategoryTitle>{date}</CategoryTitle>
          <SugestRealEstate />
        </OptionsStyle>
        <ExtensionPanelListForRealEstate />
      </div>
    );
  }
}

export default RealEstate;
