import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImagesCarousel from "../simpleComponents/ImagesCarousel";
import aptImg from "../../images/apartment.jpg";
import jobImg from "../../images/jobs.jpg";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-around",
  width: "100%",
  height: "100%",
  color: "#FFF"
};

const SectionStyle = styled.div `
  width: 100%;
  height: 250px;
  display: flex;
  margin: 3px 0;
  flex-direction: row;
  justify-content: space-around;
  @media only screen and (max-width: 540px) {
      height: 200px
  }
`;

const TextSquareStyle = styled.div `
  width: 59.5%;
  background-color: #FFF;
  color: rgb(52, 58, 64);
  font-size: 20px;
  border: 1px solid rgb(99, 174, 164);
  border-sadius: 5px;
  padding: 40px;
  box-sizing: border-box;
  text-align: center;
`;
const imgContainer = {
  width: "39%",
  height: "100%"
};
const imgContainerMB = {
  width: "100%",
  height: "250px"
};
const imgContainerTB = {
  width: "100%",
  height: "250px"
};

const AptTableStyle = styled.img`
  width: 100%;
  height: 100%;
  background-color: #CADB30;
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
  width: '130px',
  display: 'flex',
};

const FirstSquareText = styled.p`
  font-size: 1.5vw;
  @media (max-width: 540px) {
    display: none !important;
  }
`;

const ButtonLink = styled.a`
  textDecoration: none;
  display: flex;
  justify-content: center;
`;

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
              <ButtonLink to="/jobs">
                <Button variant="outlined" size="medium" style={marginBtn}>
                  <ButtonText>ללוח משרות</ButtonText>
                </Button>
              </ButtonLink>
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
              <ButtonLink to="/realEstate">
                <Button variant="outlined" size="medium" style={marginBtn}>
                  <ButtonText>ללוח דיור</ButtonText>
                </Button>
              </ButtonLink>
            </TextSquareStyle>
          </SectionStyle>
        </div>
      </div>
    );
  }
}

export default Home;
