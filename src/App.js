import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header.js";
//import WrapContainer from "./containers/WrapContainer.js";
import Footer from "./components/Footer.js";

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
