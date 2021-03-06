import { getCharityById, getCharityDonationsById, AppId } from "./Api";
import { charityId } from "../containers/WrapContainerUpdate";

//async and await, using "spy" (jest.fn which is a mock function) and returning an empty result using the fake (mock) function
window.fetch = jest.fn(async () => ({}));

//testing the API function for the charity content
describe("getCharityById", () => {
  it("should check the fetch was called", async () => {
    //const charityId = 2357; (no longer required)
    console.log();
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

//testing the API function for the charity donations content
describe("getCharityDonationsById", () => {
  it("should check the fetch was called", async () => {
    //const charityId = 2357;  (no longer required)
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
