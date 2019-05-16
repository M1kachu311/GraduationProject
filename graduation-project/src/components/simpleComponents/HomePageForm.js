import React, { Component } from 'react'

const formDisplay = {
    display: 'flex',
    flexDirection: 'column'
}

export class HomePageForm extends Component {
  render() {
    return (
        <div>
            <h2>צרו איתנו קשר</h2>
            <form style={formDisplay}>
                <input type="text" value="" placeholder="שם מלא" />
                <input type="text" value="" placeholder="מספר טלפון" />
                <input type="email" value="" placeholder="כתובת דואר אלקטרוני" />
                <textarea rows="4" cols="50" placeholder="כתוב הודעה..."></textarea>
                <input type="submit" value="שלח" />
            </form>
        </div>
    )
  }
}

export default HomePageForm
