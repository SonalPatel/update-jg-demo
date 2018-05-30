import React from "react";
import CharityInfoUpdate from "../components/CharityInfoUpdate";
import DonationsUpdate from "../components/DonationsUpdate";
import Footer from "../components/Footer.js";

class WrapContainerUpdate extends React.Component {
  //creating a state variable and setting the charityId and below passing the prop to the charityInfo compontent
  state = {
    charityId: 2357
  };
  render() {
    return (
      <div className="container">
        <div className="brand-banner">
          <CharityInfoUpdate charityId={this.state.charityId} />
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
