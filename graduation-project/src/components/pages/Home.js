import React, { Component } from 'react'

import HomeCards from '../simpleComponents/HomeCards'

const mainStyle = {
	display: 'flex',
	flexDirection: 'row',
	width: '85%',
	margin: '0 auto'
}

const facebookIframStyle = {
	border:'none', 
	overflow:'hidden', 
	width:'250px',
	height:'600px', 
	float:'left'
}

const jobCardTitle = 'תעסוקה'
const realEstateCardTitle = 'דיור'
const jobCardSubtitle = 'לוח משרות'
const realEstateCardSubtitle = 'לוח דירות'

export class Home extends Component {
  render() {
    return (
		<div style={mainStyle}>
			<HomeCards 
				title={jobCardTitle}
				subtitle={jobCardSubtitle}
			/>
			<HomeCards 
				title={realEstateCardTitle}
				subtitle={realEstateCardSubtitle}
			/>
			<iframe scrolling="yes" title="facebookLastPosts" src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fzvi.yeruham&width=250&height=600&stream=true&header=true" style={facebookIframStyle}></iframe>
    	</div>
    )
  }
}

export default Home
