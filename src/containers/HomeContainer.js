import React from "react";
import "../styles/App.css";
//import HomeInfo from "../components/HomeInfo.js";
//import Footer from "../components/Footer.js";

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="container mt">
        <div className="content-wrap">
          <h2>Welcome to my assesments</h2>
          <p>
            Following the feedback from the first assesment I have created a new
            app to show the updated code
          </p>
        </div>

        <div className="flex-grid mt">
          <div className="col">
            <h2>The updated assesment has the following changes:</h2>
            <ul>
              <li> x </li>
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

export default HomeContainer;
