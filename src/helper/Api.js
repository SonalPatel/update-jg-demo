import React from "react";
export const AppId = "8b28a350";

export const getCharityById = charityId => {
  return fetch(`https://api.justgiving.com/${AppId}/v1/charity/${charityId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const getCharityDonationsById = charityId => {
  return fetch(
    `https://api.justgiving.com/${AppId}/v1/charity/${charityId}/donations`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  );
};
