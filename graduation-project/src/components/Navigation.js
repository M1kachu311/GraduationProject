import React, { Component } from 'react'

const navStyle = {
	display: 'flex',
	listStyleType: 'none',
}

const navElementStyle = {
	padding: '10px'
}

export class Navigation extends Component {
	render() {
		return (
			<div>
				<ul style={navStyle}>
					<li style={navElementStyle}><a href="/">בית</a></li>
					<li style={navElementStyle}><a href="/about">אודות</a></li>
					<li style={navElementStyle}><a href="/contact">צור קשר</a></li>
				</ul>
			</div>
		)
	}
}

export default Navigation
