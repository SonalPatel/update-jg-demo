import React from "react";
import { shallow } from "enzyme";
import CharityInfoUpdate from "../CharityInfoUpdate";
import formatted from "enzyme-to-json"; //prettify is my variable name i can call it anything

//take a snapshot of the loading state in the CHARITY component **********CHECK***************
describe("Render CharityUpdate component", () => {
  // when the state is set to loading, take a snapshot of the html code in a readable format
  it("should render in a loading state", () => {
    const charityInfoUpdate = shallow(<CharityInfoUpdate />);
    //formatt the code so it's easy to read
    const formatted = prettify(charityInfoUpdate);
    expect(formatted).toMatchSnapshot();
  });

  //take a snapshot of the whole CharityUpdate component rendered html when it has sucsessfully loaded with no errors
  it("should render full component", () => {
    const state = {
      error: null,
      isLoaded: true,
      charityContent: []
    };
    const charityInfoUpdate = shallow(<CharityInfoUpdate />);
    charityInfoUpdate.setState(state);

    //formatt the code so it's easy to read
    const formatted = prettify(charityInfoUpdate);
    expect(formatted).toMatchSnapshot();
  });
});
