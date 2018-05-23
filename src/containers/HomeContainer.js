import React from "react";
import HomeInfo from "../components/HomeInfo.js";
import Footer from "../components/Footer.js";

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <HomeInfo />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
