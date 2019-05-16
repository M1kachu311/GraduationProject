import React, { Component } from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.png'

const headerStyle = {
	display: 'flex'
}

const titlesStyle = {
	display: 'flex',
	flexDirection: 'column',
	margin: '0 auto'
}

const titleStyle = {
	color: 'grey'
}

const logoStyle = {
	width: 180,
	height: 100,
	padding: 40
}

const logoAltText = 'לוגו מרכז צעירים ירוחם'


export class Header extends Component {
	render() {
		return (
			<div>
				<div style={headerStyle}>
					<img src={logo} alt={logoAltText} style={logoStyle}/>
					<div style={titlesStyle}>
						<h1 style={titleStyle}>צעירים בירוחם</h1>
						<h2 style={titleStyle}>מרגישים שמאשהו קורה כאן</h2>
					</div>
				</div>
				<Navigation />
			</div>
		)
	}
}

export default Header;