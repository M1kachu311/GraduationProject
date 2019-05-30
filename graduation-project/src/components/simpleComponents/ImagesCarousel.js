import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../../images/001.jpg";
import image2 from "../../images/002.jpg";
import image4 from "../../images/004.jpg";
import styled from "styled-components";


const ImgStyle1 = {
  width: "100%",
  height: "500px",
  objectFit: "cover",
  objectPosition: "center",
  opacity: "0.7",
  zIndex: "2"
};
const ImgStyle2 = {
  width: "100%",
  height: "500px",
  objectFit: "cover",
  objectPosition: "top",
  opacity: "0.7",
  zIndex: "2"
};
const PosRelative = styled.div`
  position: relative;
  @media only screen and (max-width: 540px) {
    & div {
      height: 300px
    }
  }
  @media only screen and (min-width: 541px) and (max-width: 840px) {
    & div {
      height: 400px
    }
  })
`;

const Title = styled.div `
  position: absolute;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  opacity: 1;
  font-size: 35px;
  margin-bottom: 200px;
  color: black;
  text-shadow: white 2px 2px 3px;
  @media only screen and (max-width: 540px) {
    & h1 {
      font-size: 32px;
    }
  }
  @media only screen and (min-width: 541px) and (max-width: 840px) {
    & h1 {
      font-size: 52px;
    }
  })
`;
// const ImgStyle3 = {
//   width: "100%",
//   height: "500px",
//   objectFit: "cover",
//   objectPosition: "bottom",
//   opacity: "0.6"
// };
export class ImagesCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      draggable: false,
      swipeToSlide: false,
      touchMove: false,
      swipe: false
    };
    return (
      <PosRelative>
        <Title>
          <h1>משהו טוב קורה פה...</h1>
        </Title>
        <Slider {...settings}>
          <div>
            <img src={image2} style={ImgStyle2} alt="bg-img" />
          </div>
          <div>
            <img src={image1} style={ImgStyle2} alt="bg-img" />
          </div>
          <div>
            <img src={image4} style={ImgStyle1} alt="bg-img" />
          </div>
        </Slider>
      </PosRelative>
    );
  }
}
export default ImagesCarousel;
