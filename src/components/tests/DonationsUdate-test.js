//import React from "react";
import { shallow } from "enzyme";
import CharityInfoUpdate from "../components/CharityInfoUpdate";

//testing if my page still renders if there are no donations
describe("should still render the page if there are no donations", () => {
  // make our assertion and what we expect to happen
  it("should render the page with the charity conent", () => {
    expect(
      shallow(<CharityInfoUpdate />).exists(
        <div className="brand-banner"> </div>
      )
    ).toBe(true);
  });
});
