import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addReview } from "../utils/slices/reviewSlice";

const useReview = ({ movieId }) => {
  const dispatch = useDispatch();

  const getReview = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/reviews?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addReview(json));
  };
  useEffect(() => {
    getReview();
  }, [movieId]);
};

export default useReview;
