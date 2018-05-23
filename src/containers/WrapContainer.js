import React from "react";
import CharityInfo from "../components/CharityInfo.js";
import Donations from "../components/Donations.js";
import Footer from "../components/Footer.js";

class WrapContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="brand-banner">
          <CharityInfo />
        </div>

        <div className="flex-grid">
          <Donations />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default WrapContainer;
