import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Slider from "react-slick";

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
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 200
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
    return <Slider {...settings}>{carouselData}</Slider>;
  }
}

export default PersonnelInfo;
