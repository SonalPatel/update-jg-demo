import React from "react";
import { getCharityDonationsById } from "./../helper/Api";
//settings
class DonationsUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: [] //my donations empty array
    };
  }

  //when the page has loaded we want to perform our ajax call using Fetch which is the modern way to make an ajax call
  //can check with console.log("did mount");
  componentDidMount() {
    // call my re-useable function and manually enter the charity ID  (cruk: 2357, oxfam:13441, bhf: 183092 ).
    //getCharityDonationsById(2357)
    getCharityDonationsById(this.props.charityId)
      //fetching the json, (.then is like a callback function)  ****** EXPLAIN********
      .then(res => res.json())
      //update the state with the info from the api (state is like a holding place setState is a react method) ****** SETSTATE********
      .then(
        result => {
          this.setState({
            //****** EXPLAIN setState********
            isLoaded: true,
            content: result
          });
        },
        //error function just in case (error is a built in react property)
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

    //if (!isLoaded) {
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
      //map: mapping over the data that we’ve pulled. This is like a for loop.
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
