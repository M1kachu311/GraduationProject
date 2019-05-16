import React, { Component } from 'react'

import ExtensionPanelList from '../simpleComponents/ExtensionPanelList'
import PopUpComponent from '../simpleComponents/PopUpComponent'


const optionsStyle = {
    display: 'flex',
    justifyContent: 'space-around'
}

const mainStyle = {
	width: '85%',
	margin: '0 auto'
}

const optionsTitleStyle = {
    // margin: '10px 70px',
}

export class JobsOffer extends Component {

  render() {
    return (
        <div style={mainStyle}>
            <div style={optionsStyle}>
                <p style={optionsTitleStyle}>תאריך</p>
                <p style={optionsTitleStyle}>משרה</p>
                <p style={optionsTitleStyle}>סוג המשרה</p>
                <p style={optionsTitleStyle}>מיקום</p>
                <PopUpComponent />
            </div>
            <ExtensionPanelList />
        </div>
        
    )
  }
}

export default JobsOffer
