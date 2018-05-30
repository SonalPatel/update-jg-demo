import React from "react";
import { getCharityDonationsById } from "./../helper/Api";
class DonationsUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: []
    };
  }

  componentDidMount() {
    //getCharityDonationsById(2357) - this is now replaced as a prop below.
    getCharityDonationsById(this.props.charityId)
      // taking  the previous promise, reading it and using another promise to make into Json (res)
      //(.then is like a callback function)
      .then(res => res.json())
      //update the state with the info from the api
      .then(
        result => {
          this.setState({
            isLoaded: true,
            content: result
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    //check if the content has loaded and set the state
    const { error, isLoaded, content } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
    }

    if (isLoaded === false) {
      return (
        <div className="brand-primary">
          <p>Loading latest donation details...</p>
          <div className="lds-circle" />
        </div>
      );
    }
    {
      // returns the content from the api and then iterates over each object to allow me access to the info  using  MAP AND KEY
      //map: mapping over the data that we’ve pulled. (This is like a for loop).
      return (
        <div className="donations-wrapper" id="latest-donations">
          <h2>
            {" "}
            <span className=" brand-primary">
              <span className="fas fa-hand-holding-heart" aria-hidden="true" />
            </span>{" "}
            Latest donations
          </h2>
          <ul>
            {content.donations.map(donation => (
              <li className="layered-paper" key={donation.name}>
                <div className="flex-grid-two-unequal-small">
                  <div className="col-one-small">
                    <h3>{donation.donorDisplayName}</h3>
                  </div>

                  <div className="col-two-small">
                    <span className="avatar-wrap">
                      <img className="avatar" src={donation.imageUrl} alt="" />
                    </span>
                  </div>
                </div>

                <p>
                  <span className="brand-primary">
                    <span className="far fa-comment" aria-hidden="true" />
                  </span>{" "}
                  {donation.message}{" "}
                </p>
                <p>
                  <span className="fas fa-pound-sign" /> {donation.currencyCode}{" "}
                  <strong>{donation.amount}</strong>{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default DonationsUpdate;
