import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (movieId) => {
  const getMovieDetails = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    useEffect(() => {
      getMovieDetails();
    }, []);
  };
};

export default useMovieDetails;
