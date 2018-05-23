import React from "react";
import jgLogo from "../g-logo-small.png";
import "../styles/App.css";
/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WrapContainer from "./containers/WrapContainer";
import WrapContainerUpdate from "./containers/WrapContainerUpdate";

/* Home component */
const Home = () => (
  <div>
    <h2>Home xxxxx</h2>
  </div>
);

class Header extends React.Component {
  render() {
    return (
      <div>
        <span className="off-screen">Skip Links</span>
        <ul className="off-screen">
          <li>
            <a className="skip-link" href="#content">
              Skip to main content
            </a>
          </li>
          <li>
            <a className="skip-link" href="#latest-donations">
              Skip to latest donations
            </a>
          </li>
          <li>
            <a className="skip-link" href="#footer-content">
              Skip to footer
            </a>
          </li>
        </ul>

        <div className="flex-grid">
          <div className="col">
            <header>
              <div className="jg-logo-container">
                {
                  <a className="jg-logo" href="https://home.justgiving.com/">
                    <img
                      className="jg-logo"
                      src={jgLogo}
                      alt="JustGiving home"
                    />
                    <span className="off-screen">JustGiving Home</span>
                  </a>
                }
              </div>
              <nav>
                <div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/containers/WrapContainer">
                        First assesment
                      </Link>
                    </li>
                    <li>
                      <Link to="/containers/WrapContainerUpdate">
                        Updated assesment
                      </Link>
                    </li>
                  </ul>

                  <hr />
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
