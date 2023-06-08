import React from "react";

const ApiUrl = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "430dc15a18mshc1e407ac4ce41b1p16b3efjsn156649de6e83",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiData = async (url) => {
  const response = await fetch(`${ApiUrl}/${url}`, options);
  const data = await response.json();
  return data;
};
