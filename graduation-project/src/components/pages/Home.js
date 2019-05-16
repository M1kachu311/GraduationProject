import React, { Component } from "react";

import HomeCards from "../simpleComponents/HomeCards";
import ImagesCarousel from "../simpleComponents/ImagesCarousel";
import HomePageForm from "../simpleComponents/HomePageForm";

const mainStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "95%",
  margin: "0 auto",
  color: "#FFF"
};

const facebookIframStyle = {
  border: "none",
  width: "500px",
  height: "600px",
  float: "left"
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
          <iframe
            scrolling="yes"
            title="facebookLastPosts"
            src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fzvi.yeruham&width=500&height=600&stream=true&header=true"
            style={facebookIframStyle}
          />
        </div>
        <HomePageForm />
      </div>
    );
  }
}

export default Home;
