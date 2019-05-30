import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Slider from "react-slick";
import MediaQuery from "react-responsive";
import AvatarComp from "./AvatarComp";

const titlesStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: "20px"
};

const paperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 200,
  draggable: false,
  swipeToSlide: false,
  touchMove: false,
  swipe: false
};
const settings1 = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 200,
  draggable: false,
  swipeToSlide: false,
  touchMove: false,
  swipe: false
};
const settings2 = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 200,
  draggable: false,
  swipeToSlide: false,
  touchMove: false,
  swipe: false
};
const settings3 = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 200,
  draggable: false,
  swipeToSlide: false,
  touchMove: false,
  swipe: false
};

export class PersonnelInfo extends Component {
  state = { data: [] };

  componentDidMount() {
    fetch("http://127.0.0.1:3002/mainpersonnel")
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        this.setState({ data: myJson });
      });
  }

  render() {
    const carouselData = this.state.data.map(person => {
      return (
        <div key={person.ID}>
          <Paper elevation={1} style={paperStyle}>
            <AvatarComp img={person.Image} />
            <div style={titlesStyle}>
              <p>{person.Name}</p>
              <p>{person.Title}</p>
              <p>{person.Phone}</p>
              <p>{person.Email}</p>
            </div>
          </Paper>
        </div>
      );
    });
    return (
      <>
        {" "}
        <MediaQuery minWidth={1281}>
          <Slider {...settings}>{carouselData}</Slider>
        </MediaQuery>
        <MediaQuery minWidth={841} maxWidth={1280}>
          <Slider {...settings1}>{carouselData}</Slider>
        </MediaQuery>
        <MediaQuery minWidth={541} maxWidth={840}>
          <Slider {...settings2}>{carouselData}</Slider>
        </MediaQuery>
        <MediaQuery maxWidth={540}>
          <Slider {...settings3}>{carouselData}</Slider>
        </MediaQuery>
      </>
    );
  }
}

export default PersonnelInfo;
