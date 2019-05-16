import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../../images/001.jpg";
import image2 from "../../images/002.jpg";
import image3 from "../../images/003.jpg";

const ImgStyle = {
  width: "100%",
  height: "600px",
  objectFit: "cover",
  objectPosition: "top"
};
const divStyle = {
  position: "static"
};
export class ImagesCarousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <Slider {...settings}>
        <div style={divStyle}>
          <img src={image1} style={ImgStyle} alt="bg-img" />
        </div>
        <div>
          <img src={image2} style={ImgStyle} alt="bg-img" />
        </div>
        <div>
          <img src={image3} style={ImgStyle} alt="bg-img" />
        </div>
      </Slider>
    );
  }
}
export default ImagesCarousel;
