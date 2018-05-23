import React, { Component } from "react";
import "./styles/App.css";
/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WrapContainer from "./containers/WrapContainer";
import WrapContainerUpdate from "./containers/WrapContainerUpdate";
import Header from "./components/Header.js";
//import WrapContainer from "./containers/WrapContainer.js";
import Footer from "./components/Footer.js";

/* Home component */
const Home = () => (
  <div>
    <h2>Home xxxxx</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />

          <Footer />

          <Route exact path="/" component={Home} />
          <Route path="/containers" component={WrapContainer} />
          <Route path="/containers" component={WrapContainerUpdate} />
        </Router>
      </div>
    );
  }
}

export default App;
