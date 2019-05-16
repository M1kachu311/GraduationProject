import React, { Component } from "react";

import HomeCards from "../simpleComponents/HomeCards";
import ImagesCarousel from "../simpleComponents/ImagesCarousel";

const mainStyle = {
  display: "flex",
  flexDirection: "rows",
  justifyContent: "space-evenly",
  width: "100%",
  margin: "0 auto"
};

const jobCardTitle = "תעסוקה";
const realEstateCardTitle = "דיור";
const jobCardLink = "/jobs";
const realEstateLink = "/realEstate";
const jobCardLinkTitle = "לוח משרות";
const jobCardDescription = "לוח משרות";
const realEstateCardLinkTitle = "לוח דיור";
const realEstateCardDescription = "לוח דיור";

export class Home extends Component {
  render() {
    return (
      <div>
        <ImagesCarousel />
        <div style={mainStyle}>
          <HomeCards
            title={jobCardTitle}
            link={jobCardLink}
            linkText={jobCardLinkTitle}
            linkDescription={jobCardDescription}
          />

          <HomeCards
            title={realEstateCardTitle}
            link={realEstateLink}
            linkText={realEstateCardLinkTitle}
            linkDescription={realEstateCardDescription}
          />
        </div>
      </div>
    );
  }
}

export default Home;
