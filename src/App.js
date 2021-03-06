import React, { Component } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WrapContainer from "./containers/WrapContainer";
import WrapContainerUpdate from "./containers/WrapContainerUpdate";
import Header from "./components/Header.js";
import HomeContainer from "./containers/HomeContainer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={HomeContainer} />
          <Route path="/first" component={WrapContainer} />
          <Route path="/updated" component={WrapContainerUpdate} />
        </div>
      </Router>
    );
  }
}

export default App;
