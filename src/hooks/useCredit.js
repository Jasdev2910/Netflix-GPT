import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCast } from "../utils/slices/creditsSlice";

const useCredit = ({ movieId }) => {
  const dispatch = useDispatch();
  const getCredits = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addCast(json));
  };

  useEffect(() => {
    getCredits();
  }, [movieId]);
};

export default useCredit;
