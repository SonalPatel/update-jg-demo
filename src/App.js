import React, { Component } from "react";
import "./App.css";
/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WrapContainer from "./containers/WrapContainer";
import WrapContainerUpdate from "./containers/WrapContainerUpdate";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/containers/WrapContainer">First assesment</Link>
        </li>
        <li>
          <Link to="/containers/WrapContainerUpdate">Updated assesment</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/containers" component={WrapContainer} />
      <Route path="/containers" component={WrapContainerUpdate} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default BasicExample;

/*
import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header.js";
import WrapContainer from "./containers/WrapContainer.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <WrapContainer />
        <Footer />
      </div>
    );
  }
}

export default App;



*/
