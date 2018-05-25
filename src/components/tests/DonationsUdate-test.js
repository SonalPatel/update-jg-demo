import React from "react";
import { shallow, mount, render } from "enzyme";
import CharityInfoUpdate from "../components/CharityInfoUpdate";
import DonationsUpdate from "../components/DonationsUpdate";

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

//it("should return true when the words are the same", () => {
// const result = isSameWord("word1", "word1");
//expect(result).toBe(true);
//});
