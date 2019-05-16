import React, { Component } from 'react'

import ExtensionPanelListForRealEstate from '../simpleComponents/ExtensionPanelListForRealEstate'
import IhaveAJobPopUp from '../simpleComponents/IhaveAJobPopUp'

const salleOrRent = 'מכירה/השכרה'
const type = 'סוג הנכס'
const rooms = 'מס׳ חדרים'
const floor = 'קומה'
const adrdess = 'כתובת'
const price = 'מחיר'
const date = 'תאריך'

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

export class RealEstate extends Component {

  render() {
    return (
        <div style={mainStyle}>
            <div style={optionsStyle}>
                <p style={optionsTitleStyle}>{salleOrRent}</p>
                <p style={optionsTitleStyle}>{type}</p>
                <p style={optionsTitleStyle}>{rooms}</p>
                <p style={optionsTitleStyle}>{floor}</p>
                <p style={optionsTitleStyle}>{adrdess}</p>
                <p style={optionsTitleStyle}>{price}</p>
                <p style={optionsTitleStyle}>{date}</p>
                <IhaveAJobPopUp />
            </div>
            <ExtensionPanelListForRealEstate />
        </div>
        
    )
  }
}

export default RealEstate
