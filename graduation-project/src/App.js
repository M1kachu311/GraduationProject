import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import JobsOffer from "./components/pages/JobsOffer";
import RealEstate from './components/pages/RealEstate';
import YouthCenter from "./components/pages/YouthCenter";
import Settlement from "./components/pages/Settlement";
import ReducingGaps from "./components/pages/ReducingGaps";
import kolna from "./components/pages/kolna";
import ForTheCommunity from "./components/pages/ForTheCommunity";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/jobs" component={JobsOffer} />
          <Route path="/realEstate" component={RealEstate} />
          <Route path="/youthCenter" component={YouthCenter} />
          <Route path="/settlement" component={Settlement} />
          <Route path="/reducingGaps" component={ReducingGaps} />
          <Route path="/kolna" component={kolna} />
          <Route path="/forTheCommunity" component={ForTheCommunity} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
