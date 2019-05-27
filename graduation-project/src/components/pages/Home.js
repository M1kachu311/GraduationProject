import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImagesCarousel from "../simpleComponents/ImagesCarousel";
import aptImg from "../../images/apartment.jpg";
import jobImg from "../../images/jobs.jpg";
import Button from "@material-ui/core/Button";
import MediaQuery from "react-responsive";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-around",
  width: "100%",
  height: "520px",
  color: "#FFF"
};

const jobSectionStyle = {
  width: "100%",
  height: "250px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
};

const jobTitleStyle = {
  width: "59.5%",
  backgroundColor: "#FFF",
  color: "rgb(52, 58, 64)",
  fontSize: "20px",
  border: "1px solid rgb(99, 174, 164)",
  borderRadius: "5px",
  padding: "40px",
  boxSizing: "border-box",
  textAlign: "center"
};
const imgContainer = {
  width: "39%",
  height: "250px"
};
const imgContainerMB = {
  width: "100%",
  height: "250px"
};
const imgContainerTB = {
  width: "100%",
  height: "250px"
};

const jobTableStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#63AEA4",
  display: "flex",
  justifyContent: "center",
  borderRadius: "5px",
  alignItems: "center",
  objectFit: "cover"
};
const aptTableStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#CADB30",
  display: "flex",
  justifyContent: "center",
  borderRadius: "5px",
  alignItems: "center",
  objectFit: "cover"
};
const colorBlue = {
  color: "rgb(99, 174, 164)",
  textAlign: "center",
  fontSize: "30px",
  margin: "10px"
};
const marginBtn = {
  margin: "20px",
  border: " 1px solid rgb(99, 174, 164)",
  color: "  rgb(99, 174, 164)"
};
export class Home extends Component {
  render() {
    return (
      <div>
        <ImagesCarousel />

        <div style={mainStyle}>
          <div style={jobSectionStyle}>
            <div style={jobTitleStyle}>
              <p style={colorBlue}>מחפש עבודה?</p>
              <p>
                מרכז הצעירים בנה עבור דורשי העבודה בנגב לוח משרות מגוון ועדכני
              </p>
              <p>
                {" "}
                שלח את פרטיך וקורות החיים שלך לרכזת התעסוקה שלנו על מנת להגביר
                את סיכויי ההשמה{" "}
              </p>
              <Link to="/jobs" style={{ textDecoration: "none" }}>
                <Button variant="outlined" size="large" style={marginBtn}>
                  ללוח משרות
                </Button>
              </Link>
            </div>
            <div style={imgContainer}>
              <img style={jobTableStyle} src={jobImg} alt="job" />
            </div>
          </div>

          <div style={jobSectionStyle}>
            <div style={imgContainer}>
              {" "}
              <img style={aptTableStyle} src={aptImg} alt="apartment " />
            </div>
            <div style={jobTitleStyle}>
              <p style={colorBlue}>רוצה לגור בירוחם?</p>
              <p>
                מרכז הצעירים אסף בשבילך את כל הדירות המוצעות להשכרה ולמכירה
                בירוחם.
              </p>
              <p>
                השאירו את פרטיכם בטופס יצירת הקשר ונחבר אתכם לכל מה שקורה פה...
              </p>
              <Link to="/realEstate" style={{ textDecoration: "none" }}>
                <Button variant="outlined" size="large" style={marginBtn}>
                  ללוח דיור
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
