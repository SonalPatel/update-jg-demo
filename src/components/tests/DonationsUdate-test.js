import React from "react";
import { shallow, mount, render } from "enzyme";
import DonationsUpdate from "../components/DonationsUpdate";

//describe what is being tested: testing if my page still renders if there are no donations
describe("should still render the page if there are no donations", () => {
  // make our assertion and what we expect to happen
  it("should render the page without an error", () => {
    expect(
      shallow(<DonationsUpdate />).exists(
        <div className="donations-wrapper" id="latest-donations">
          {" "}
        </div>
      )
    ).toBe(true);
  });
});

//it("should return true when the words are the same", () => {
// const result = isSameWord("word1", "word1");
//expect(result).toBe(true);
//});
