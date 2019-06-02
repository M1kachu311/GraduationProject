import React, { Component } from "react";
import ImagesCarousel from "../simpleComponents/ImagesCarousel";
import aptImg from "../../images/apartment.jpg";
import jobImg from "../../images/jobs.jpg";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-around",
  width: "100%",
  height: "100%",
  color: "#FFF"
};

const SectionStyle = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  margin: 3px 0;
  flex-direction: row;
  justify-content: space-around;
  @media only screen and (max-width: 540px) {
    height: 200px;
  }
`;

const TextSquareStyle = styled.div`
  width: 59.5%;
  background-color: #fff;
  color: rgb(52, 58, 64);
  font-size: 20px;
  border: 1px solid rgb(99, 174, 164);
  border-radius: 5px;
  padding: 40px;
  box-sizing: border-box;
  text-align: center;
`;
const imgContainer = {
  width: "39%",
  height: "100%"
};

const AptTableStyle = styled.img`
  width: 100%;
  height: 100%;
  background-color: #cadb30;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  object-fit: cover;
`;

const marginBtn = {
  margin: "20px",
  border: " 1px solid rgb(99, 174, 164)",
  color: "  rgb(99, 174, 164)",
  width: "130px",
  display: "flex"
};

const FirstSquareText = styled.p`
  font-size: 1.5vw;
  @media (max-width: 540px) {
    display: none !important;
  }
`;

<<<<<<< HEAD
const ButtonLink = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center"
};
=======
const ButtonLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
>>>>>>> 10fbcc4e229b406c44a9247f20ef4e2cda9a7ede

const ButtonText = styled.p`
  @media (max-width: 540px) {
    font-size: 10px;
  }
`;

const TitleText = styled.p`
  color: rgb(99, 174, 164);
  text-align: center;
  font-size: 30px;
  margin: 10px;
  @media (max-width: 540px) {
    font-size: 20px;
  }
`;

export class Home extends Component {
  render() {
    return (
      <div>
        <ImagesCarousel />

        <div style={mainStyle}>
          <SectionStyle>
            <TextSquareStyle>
              <TitleText>מחפש עבודה?</TitleText>
              <FirstSquareText>
                מרכז הצעירים בנה עבור דורשי העבודה בנגב לוח משרות מגוון ועדכני
              </FirstSquareText>
              <FirstSquareText>
                {" "}
                שלח את פרטיך וקורות החיים שלך לרכזת התעסוקה שלנו על מנת להגביר
                את סיכויי ההשמה{" "}
              </FirstSquareText>
<<<<<<< HEAD
              <Link to="/jobs" style={ButtonLink}>
=======
              <ButtonLink href="/jobs">
>>>>>>> 10fbcc4e229b406c44a9247f20ef4e2cda9a7ede
                <Button variant="outlined" size="medium" style={marginBtn}>
                  <ButtonText>ללוח משרות</ButtonText>
                </Button>
              </Link>
            </TextSquareStyle>
            <div style={imgContainer}>
              <AptTableStyle src={jobImg} alt="job" />
            </div>
          </SectionStyle>

          <SectionStyle>
            <div style={imgContainer}>
              {" "}
              <AptTableStyle src={aptImg} alt="apartment" />
            </div>
            <TextSquareStyle>
              <TitleText>רוצה לגור בירוחם?</TitleText>
              <FirstSquareText>
                מרכז הצעירים אסף בשבילך את כל הדירות המוצעות להשכרה ולמכירה
                בירוחם.
              </FirstSquareText>
              <FirstSquareText>
                השאירו את פרטיכם בטופס יצירת הקשר ונחבר אתכם לכל מה שקורה פה...
              </FirstSquareText>
<<<<<<< HEAD
              <Link to="/realEstate" style={ButtonLink}>
=======
              <ButtonLink href="/realEstate">
>>>>>>> 10fbcc4e229b406c44a9247f20ef4e2cda9a7ede
                <Button variant="outlined" size="medium" style={marginBtn}>
                  <ButtonText>ללוח דיור</ButtonText>
                </Button>
              </Link>
            </TextSquareStyle>
          </SectionStyle>
        </div>
      </div>
    );
  }
}

export default Home;
