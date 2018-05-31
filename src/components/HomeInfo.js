import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomeInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="content-wrap">
          <h2>Welcome to my assesments</h2>
          <p>
            Following the feedback from the first assesment I have created a new
            app to show the updated code
          </p>
        </div>

        <div className="flex-grid mt">
          <div className="col content-description">
            <h3>
              The <Link to="/updated">Updated assesment</Link> has the following
              changes:
            </h3>
            <ol>
              <li>
                I branched off the first assesment and created a new instance of
                create react app.
              </li>
              <li>Created new Components and wrappers for the updated code.</li>
              <li>Re-installed SASS</li>
              <li>
                Simplified my if/else statements with the feedback from last
                time (I did actually implement this using ternary operators (?
                :) but it was even more difficult to read so then removed this.)
              </li>
              <li>
                Made a Fetch method which is re-useable: I did this by creating
                a function called Api.js, and making the AppID and the charityId
                variables.
              </li>
              <li>
                Then in each relevant component used ""getCharityById(2357)" and
                hard coded the charity ID. Tested that this rendered with
                different charities.
              </li>
              <li>
                Next, I followed the documentation on the ctreate react docs to
                create new pages via React router dom.
              </li>
              <li>Created a new HomeContainer and HomeInfo Component.</li>
              <li>
                Updated the header accordingly to navigate to the correct pages
                and updated App.js with the Router.
              </li>
              <li>
                Worked with Pete to write simple funtions and then learnt how to
                write a basic unit test for each of them.
              </li>
              <li>
                Re-searched implementing basic unit testing with Jest and
                Enzyme, installed jest and Enzyme.
              </li>
              <li>
                wrote a very basic unit test to check if my page still renders
                if there is no charity content (only donations).{" "}
              </li>
              <li>
                Read and re-searched some more, Then I created a unit test to
                take snapshots of the charityContentUpdate Component in various
                states (the loading state, and the whole rendered
                component).Testing this in the terminal as I worked, and working
                through errors.
              </li>
              <li>
                Worked on another unit test for the Api function which was
                considerably more difficult to understand. This time using a
                mock function, which are also known as spies, as they let you
                spy on the behaviour of a function.
              </li>
              <li>Looked up how to format the html so it was easier to read</li>

              <li>
                Lastly I made my variable in my function (charityId) into a
                Prop, then used that prop for testing. This included passing the
                propto the two Components. Exporting the charityId as a variable
                with an ID (export const charityId = 2357;)
              </li>
              <li>
                Given more time:
                <ul>
                  <li>
                    I would have liked to organise my components and containers
                    in a more efficient way. Using presentational components to
                    dispaly content and containers to fetch data, and break my
                    code up into smaller chunks of code.
                  </li>

                  <li>
                    Would have written a unit test for the error message if it
                    was to display.
                  </li>
                  <li>Look into the toolkit and start to use it.</li>
                  <li>
                    Changed the design and sass a little to be more neutral,
                    rather than brand specific.
                  </li>
                  <li>
                    Also I would have liked to have tried to have a go at using
                    react router dom to pass in a charity id via a url.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Wow! Quite a challenge! Learned how to swim very fast, lots
                  and lots more to learn for sure...
                </strong>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInfo;
