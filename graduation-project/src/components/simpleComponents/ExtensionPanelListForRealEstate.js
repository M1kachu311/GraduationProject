import React, { Component } from "react";
import ExtensionPanelForApartment from "./ExtensionPanelForApartment";

const city = "ירוחם";

export class ExtensionPanelListForRealEstate extends Component {
  componentDidMount() {
    fetch("http://127.0.0.1:3002/apartments")
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        this.setState({ data: myJson });
      });
  }
  state = {
    data: []
  };

  render() {
    return this.state.data.map(apartment => {
      return (
        <ExtensionPanelForApartment
          key={apartment.ID}
          offer={apartment.Offer}
          type={apartment.Type}
          rooms={apartment.Rooms}
          floor={apartment.Floor}
          address={apartment.Dir}
          city={city}
          price={apartment.Price}
          date={apartment.Date.substring(0, 10)}
          description={apartment.Description}
          name={apartment.Name}
          phone={apartment.Phone}
        />
      );
    });
  }
}

export default ExtensionPanelListForRealEstate;
