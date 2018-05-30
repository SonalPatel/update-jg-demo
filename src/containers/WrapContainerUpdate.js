import React from "react";
import CharityInfoUpdate from "../components/CharityInfoUpdate";
import DonationsUpdate from "../components/DonationsUpdate";
import Footer from "../components/Footer.js";

export const charityId = 2357;

class WrapContainerUpdate extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="brand-banner">
          <CharityInfoUpdate charityId={charityId} />
        </div>

        <div className="flex-grid">
          <DonationsUpdate charityId={charityId} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default WrapContainerUpdate;
