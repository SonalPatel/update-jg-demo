import React from "react";
import CharityInfoUpdate from "../components/CharityInfoUpdate";
import DonationsUpdate from "../components/DonationsUpdate";
import Footer from "../components/Footer.js";

export const charityId = 2357;

class WrapContainerUpdate extends React.Component {
  //assinging the charityId to state, then passing that state to the charityInfoUpdate component as a prop.
  state = {
    charityId: charityId
  };
  render() {
    //console.log(this.state.charityId); same for this.props
    return (
      <div className="container">
        <div className="brand-banner">
          <CharityInfoUpdate charityId={this.state.charityId} />
        </div>

        <div className="flex-grid">
          <DonationsUpdate charityId={this.state.charityId} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default WrapContainerUpdate;
