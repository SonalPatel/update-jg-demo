import React, { Component } from "react";
import "./styles/App.css";
/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WrapContainer from "./containers/WrapContainer";
import WrapContainerUpdate from "./containers/WrapContainerUpdate";
import Header from "./components/Header.js";
import HomeContainer from "./containers/HomeContainer.js";
//import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <HomeContainer />

          <Route exact path="/home" component={HomeContainer} />
          <Route path="/first" component={WrapContainer} />
          <Route path="/updated" component={WrapContainerUpdate} />
        </div>
      </Router>
    );
  }
}

export default App;
