import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/first">First assesment</Link>
        </li>
        <li>
          <Link to="/second">Second assesment</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/first" component={First} />
      <Route path="/second" component={Second} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const First = () => (
  <div>
    <h2>First</h2>
  </div>
);
const second = () => (
  <div>
    <h2>second</h2>
  </div>
);

export default BasicExample;
