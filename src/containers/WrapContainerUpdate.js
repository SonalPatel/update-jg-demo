import React from "react";
import CharityInfoUpdate from "../components/CharityInfoUpdate";
import DonationsUpdate from "../components/DonationsUpdate";

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
      </div>
    );
  }
}

export default WrapContainerUpdate;
