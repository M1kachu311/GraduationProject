import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

import AvatarComp from "./AvatarComp";

const titlesStyle = {
  display: "flex",
  flexDirection: "column"
};

const paperStyle = {
  display: "flex"
};

const titles = {
  name: "שם: ",
  title: "תפקיד: ",
  phone: "טלפון: ",
  email: "דוא״ל: "
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
    return this.state.data.map(person => {
      return (
        <div key={person.ID}>
          <Paper elevation={1} style={paperStyle}>
            <AvatarComp img={person.Image} />
            <div style={titlesStyle}>
              <p>
                {titles.name}
                {person.Name}
              </p>
              <p>
                {titles.title}
                {person.Title}
              </p>
            </div>
            <div style={titlesStyle}>
              <p>
                {titles.phone}
                {person.Phone}
              </p>
              <p>
                {titles.email}
                {person.Email}
              </p>
            </div>
          </Paper>
        </div>
      );
    });
  }
}

PersonnelInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default PersonnelInfo;
