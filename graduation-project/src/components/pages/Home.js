import React, { Component } from 'react'
import GeneralCard from '../GeneralCard'

const cardsDisplay = {
	display: 'flex',
	flexDirection: 'row'
}

export class Home extends Component {
  render() {
    return (
    	<div style={cardsDisplay}>
			<div>Placeholder for the facebook carousel</div>
			<GeneralCard />
			<GeneralCard />
    	</div>
    )
  }
}

export default Home
