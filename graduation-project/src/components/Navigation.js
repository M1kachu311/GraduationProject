import React, { Component } from 'react'

const navStyle = {
	display: 'flex',
	listStyleType: 'none',
}

const navElementStyle = {
	padding: '10px',
}

const linkStyle = {
	color: '#C7D72B',
	textDecoration: 'none', 
    cursor: 'pointer' 
}

export class Navigation extends Component {
	render() {
		return (
			<div>
				<ul style={navStyle}>
					<li style={navElementStyle}><a style={linkStyle} href="/">בית</a></li>
					<li style={navElementStyle}><a style={linkStyle} href="/about">אודות</a></li>
					<li style={navElementStyle}><a style={linkStyle} href="/contact">צור קשר</a></li>
				</ul>
			</div>
		)
	}
}

export default Navigation
