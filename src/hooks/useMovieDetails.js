import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {
  addMovieDetails,
  removeMovieDetails,
} from "../utils/slices/moviePageSlice";
import { useDispatch } from "react-redux";

const useMovieDetails = ({ movieId }) => {
  const dispatch = useDispatch();
  console.log(movieId);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addMovieDetails(json));
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default useMovieDetails;
