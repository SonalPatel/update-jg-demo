import React from "react";
import "../styles/App.css";
import HomeInfo from "../components/HomeInfo.js";
//import Footer from "../components/Footer.js";

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="container mt">
        <HomeInfo />
      </div>
    );
  }
}

export default HomeContainer;
