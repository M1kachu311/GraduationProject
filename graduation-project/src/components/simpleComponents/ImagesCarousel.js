import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../../images/001.jpg";
import image2 from "../../images/002.jpg";
import image4 from "../../images/004.jpg";

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
const posRelative = {
  position: "relative"
};
const postABSOLUTE = {
  position: "absolute",
  width: "100%",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "3",
  fontSize: "35px",
  marginBottom: "200px",
  color: "#343a40!",
  textShadow: `white 2px 2px 3px`
};
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
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div style={posRelative}>
        <div style={postABSOLUTE}>
          <h1>משהו טוב קורה פה...</h1>
        </div>
        <Slider {...settings}>
          <div>
            <img src={image1} style={ImgStyle2} alt="bg-img" />
          </div>
          <div>
            <img src={image2} style={ImgStyle2} alt="bg-img" />
          </div>
          <div>
            <img src={image4} style={ImgStyle1} alt="bg-img" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default ImagesCarousel;
