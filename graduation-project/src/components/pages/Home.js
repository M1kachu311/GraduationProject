import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImagesCarousel from "../simpleComponents/ImagesCarousel";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  width: "100%",
  color: "#FFF",
  padding: "0vw 1vw"
};

const jobSectionStyle = {
  width: "100vw",
  height: "200px",
  display: "flex",
  flexDirection: "row",
  padding: "0.5vw",
  justifyContent: "space-between"
};

const jobTitleStyle = {
  width: "59.25vw",
  backgroundColor: "#343A40",
  color: "#C7D72B",
  padding: "0.5vw"
};

const jobTableStyle = {
  width: "39.25vw",
  backgroundColor: "#C7D72B"
};

const housingSectionStyle = {
  width: "100vw",
  height: "200px",
  display: "flex",
  flexDirection: "row",
  padding: "0.5vw",
  justifyContent: "space-between"
};

const housingTitleStyle = {
  width: "56.75vw",
  padding: "40px",
  backgroundColor: "#343A40",
  color: "#C7D72B"
};
const housingTableStyle = {
  width: "36.75vw",
  backgroundColor: "#C7D72B"
};

export class Home extends Component {
  render() {
    return (
      <div>
        <ImagesCarousel />

        <div style={mainStyle}>
          <div style={jobSectionStyle}>
            <div style={jobTitleStyle}>
              <p>מחפש עבודה?</p>
              <p>
                מרכז הצעירים בנה עבור דורשי העבודה בנגב לוח משרות מגוון ועדכני
              </p>
              <p>
                {" "}
                שלח את פרטיך וקורות החיים שלך לרכזת התעסוקה שלנו על מנת להגביר
                את סיכויי ההשמה{" "}
              </p>
            </div>
            <div style={jobTableStyle} />
            <Link to="/jobs">בשביל הקהילה</Link>
          </div>

          <div style={housingSectionStyle}>
            <div style={housingTableStyle}>
              <Link to="/realEstate">בשביל הקהילה</Link>
            </div>

            <div style={housingTitleStyle}>
              <p>מחפש דירה?</p>
              <p>
                מרכז הצעירים בנה עבור דורשי העבודה בנגב לוח משרות מגוון ועדכני
              </p>
              <p>
                {" "}
                שלח את פרטיך וקורות החיים שלך לרכזת התעסוקה שלנו על מנת להגביר
                את סיכויי ההשמה{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
