import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useCredit = () => {
  const getCredits = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
  };

  useEffect(() => {
    getCredits();
  });
};

export default useCredit;
