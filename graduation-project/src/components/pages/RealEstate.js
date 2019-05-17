import React, { Component } from "react";

import ExtensionPanelListForRealEstate from "../simpleComponents/ExtensionPanelListForRealEstate";
import SugestRealEstate from "../simpleComponents/SugestRealEstate";

const salleOrRent = "מכירה/השכרה";
const type = "סוג הנכס";
const rooms = "מס׳ חדרים";
const floor = "קומה";
const adrdess = "כתובת";
const price = "מחיר";
const date = "תאריך";

const optionsStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: 'center',
  backgroundColor: '#43A4BB'
};

const mainStyle = {
  width: "90%",
  minHeight: "500px",
  margin: "20px auto",
  borderRadius: '5px',
  boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
};

const optionsTitleStyle = {
  // margin: '10px 70px',
};

export class RealEstate extends Component {
  render() {
    return (
      <div style={mainStyle}>
        <div style={optionsStyle}>
          <p style={optionsTitleStyle}>{salleOrRent}</p>
          <p style={optionsTitleStyle}>{type}</p>
          <p style={optionsTitleStyle}>{rooms}</p>
          <p style={optionsTitleStyle}>{floor}</p>
          <p style={optionsTitleStyle}>{adrdess}</p>
          <p style={optionsTitleStyle}>{price}</p>
          <p style={optionsTitleStyle}>{date}</p>
          <SugestRealEstate />
        </div>
        <ExtensionPanelListForRealEstate />
      </div>
    );
  }
}

export default RealEstate;
