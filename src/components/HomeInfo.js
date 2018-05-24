import React from "react";
/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomeInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="content-wrap">
          <h2>Welcome to my assesments</h2>
          <p>
            Following the feedback from the first assesment I have created a new
            app to show the updated code
          </p>
        </div>

        <div className="flex-grid mt">
          <div className="col content-description">
            <h3>
              The <Link to="/updated">Updated assesment</Link> has the following
              changes:
            </h3>
            <ul>
              <li> TO DO </li>
              <li> x </li>
              <li> x </li>
              <li> x </li>
              <li> x </li>
              <li> x </li>
              <li> x </li>
              <li> x </li>
              <li> x </li>
              <li> x </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInfo;
