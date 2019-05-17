import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImagesCarousel from "../simpleComponents/ImagesCarousel";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-around",
  width: "100%",
  height: "420px",
  color: "#FFF"
};

const jobSectionStyle = {
  width: "100%",
  height: "200px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
};

const jobTitleStyle = {
  width: "59.5%",
  backgroundColor: "#FFF",
  color: "rgb(52, 58, 64)",
  fontSize: "20px",
  border: "2px solid #C7D72B",
  borderRadius: "5px",
  padding: "40px",
  boxSizing: "border-box"
};

const jobTableStyle = {
  width: "39%",
  backgroundColor: "#63AEA4",
  display: "flex",
  justifyContent: "center",
  borderRadius: "5px",
  alignItems: "center"
};
const aptTableStyle = {
  width: "39%",
  backgroundColor: "#CADB30",
  display: "flex",
  justifyContent: "center",
  borderRadius: "5px",
  alignItems: "center"
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
            <div style={jobTableStyle}>
              <Link to="/jobs">
                <Fab variant="extended" color="primary" aria-label="Add">
                  <NavigationIcon />
                  ללוח משרות
                </Fab>
              </Link>
            </div>
          </div>

          <div style={jobSectionStyle}>
            <div style={aptTableStyle}>
              <Link to="/realEstate">
                <Fab variant="extended" color="primary" aria-label="Add">
                  <NavigationIcon />
                  ללוח דיור
                </Fab>
              </Link>
            </div>

            <div style={jobTitleStyle}>
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
