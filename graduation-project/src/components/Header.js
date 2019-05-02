import React, { Component } from 'react'
import Navigation from './Navigation'

const titleStyle = {
	color: 'red'
}

export class Header extends Component {
	render() {
		return (
			<div>
				<h1 style={titleStyle}>Hello world</h1>
				<Navigation />
			</div>
		)
	}
}

export default Header;