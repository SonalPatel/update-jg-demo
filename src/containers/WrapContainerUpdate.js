import React from "react";
import CharityInfoUpdate from "../components/CharityInfoUpdate";
import DonationsUpdate from "../components/DonationsUpdate";
import Footer from "../components/Footer.js";

class WrapContainerUpdate extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="brand-banner">
          <CharityInfoUpdate />
        </div>

        <div className="flex-grid">
          <DonationsUpdate />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default WrapContainerUpdate;
