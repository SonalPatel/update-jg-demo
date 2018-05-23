import React from "react";
import Footer from "../components/Footer.js";

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="flex-grid">
          <h2> welcome to my Demo</h2>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
