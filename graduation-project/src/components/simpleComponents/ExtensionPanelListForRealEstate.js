import React, { Component } from "react";
import ExtensionPanelForApartment from "./ExtensionPanelForApartment";

const city = 'ירוחם'

export class ExtensionPanelListForRealEstate extends Component {
  
  state = {
    data: [
      {
        ID: 1,
        Offer: 'השכרה',
        Type: 'דירת גן',
        Rooms: 3,
        Floor: 4,
        Address: 'ha shaked 15, yeruham 23423 Israel',
        Price: 23423,
        Date: '01/03/2019',
        Description: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
        Name: 'Nathan Goel',
        Phone: '0505132678'
      }
    ]
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
          address={apartment.Address}
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
