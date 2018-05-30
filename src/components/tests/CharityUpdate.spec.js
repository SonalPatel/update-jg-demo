import React from "react";
import { shallow } from "enzyme";
import DonationsUpdate from "../DonationsUpdate";

//testing if my page still renders if there is no charity content
describe("should still render the page if there is no charity content", () => {
  it("should render the page with the donations content", () => {
    expect(
      shallow(<DonationsUpdate />).exists(
        <div className="donations-wrapper" id="latest-donations">
          {" "}
        </div>
      )
    ).toBe(true);
  });
});
