import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import JobsOffer from "./components/pages/JobsOffer";
import Page1 from "./components/pages/YouthCenter";
import Page2 from "./components/pages/Settlement";
import Page3 from "./components/pages/ReducingGaps";
import Page4 from "./components/pages/kolna";
import Page5 from "./components/pages/ForTheCommunity";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/jobs" component={JobsOffer} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
          <Route path="/page5" component={Page5} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
