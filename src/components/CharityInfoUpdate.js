import React from "react";
import { getCharityById } from "./../helper/Api";

class CharityInfoUpdate extends React.Component {
  //settings and state
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      charityContent: [] // my empty array
    };
  }

  //when the component has mounted (page has loaded) we want to perform our ajax call using Fetch which is the modern way to make an ajax call
  //fetch returns a promise which contains various information.
  // the headers were required as the api was xml: if its not json then make it json.
  componentDidMount() {
    // call my re-useable function and manually enter the charity ID  (cruk: 2357, oxfam:13441, bhf: 183092 ).
    //getCharityById(2357)
    getCharityById(this.props.charityId)
      // taking  the previous promise, reading it and using another promise to make into Json (res) (.then is like a callback function)
      .then(res => res.json())
      //update the state with the info from the api (state is like a holding place, setState is a react method)
      .then(
        result => {
          this.setState({
            isLoaded: true,
            charityContent: result
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
    //console.log(this.props.charityId);
    const { error, isLoaded, charityContent } = this.state;
    //check if error then display an error message {error.message} is part of react
    if (error) {
      return <div>Error: {error.message} </div>;
    }

    //if the content has not loaded yet, then show the text loading message
    //if (!isLoaded) {
    if (isLoaded === false) {
      return (
        <div className="brand-primary">
          <p>Loading charity content...</p>
          <div className="lds-circle" />
        </div>
      );
    }

    // returns the content from the api and then iterates over each object to allow me access to the info
    //(charityContent is my varible name for the instance of each index defined in the settings at the top);
    return (
      <div className="content-info" id="content" role="main">
        <div className="charity-wrapper">
          <div className="charity-logo-wrap">
            <img
              className="charity-logo img-fluid"
              src={charityContent.logoAbsoluteUrl}
              alt={`${charityContent.name} Logo`}
            />
          </div>

          <h1 className="off-screen">{charityContent.name}</h1>
        </div>
        <div className="charity-info">
          <h2>
            {charityContent.name} {charityContent.impactStatementWhat} to{" "}
            {charityContent.impactStatementWhy}
          </h2>

          <p>{charityContent.description}</p>
          <a href={charityContent.profilePageUrl}>
            Find out more about {charityContent.name}{" "}
          </a>
        </div>

        <aside role="complementary">
          <ul className="list-items">
            <li>
              <strong>Contact us at: </strong>
              <a href={`mailto:${charityContent.emailAddress}`}>
                {charityContent.emailAddress}
              </a>
            </li>
            <li>
              <strong>{charityContent.name} registered charity number:</strong>{" "}
              {charityContent.id}
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default CharityInfoUpdate;
