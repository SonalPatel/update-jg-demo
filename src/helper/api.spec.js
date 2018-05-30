import { getCharityById, getCharityDonationsById, AppId } from "./Api";
import { charityId } from "../containers/WrapContainerUpdate";

// Testing with async and await, using "spy" (jest.fn which is a mock function) and returning an
//empty result
window.fetch = jest.fn(async () => ({}));

//testing the API function for the charity content
describe("getCharityById", () => {
  it("should check the fetch was called", async () => {
    //const charityId = 2357;
    console.log(charityId);
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    await getCharityById(charityId);
    expect(fetch).toBeCalledWith(
      `https://api.justgiving.com/${AppId}/v1/charity/${charityId}`,
      options
    );
  });
});

//teting the API function for the charity donations content
describe("getCharityDonationsById", () => {
  it("should check the fetch was called", async () => {
    //const charityId = 2357;
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    await getCharityDonationsById(charityId);
    expect(fetch).toBeCalledWith(
      `https://api.justgiving.com/${AppId}/v1/charity/${charityId}/donations`,
      options
    );
  });
});
