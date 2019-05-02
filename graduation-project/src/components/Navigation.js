import React, { Component } from 'react'

export class Navigation extends Component {
	render() {
		return (
			<div>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/contact">Contact Us</a></li>
					<li><a href="/about">About Us</a></li>
				</ul>
			</div>
		)
	}
}

export default Navigation
