
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import JobsOffer from './components/pages/JobsOffer';

export class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route exact path='/' component={Home}/>
					<Route path='/contact' component={Contact}/>
					<Route path='/about' component={About}/>
					<Route path='/jobs' component={JobsOffer}/>
					<Footer />
				</div>
			</Router>
		)
	}
}

export default App
