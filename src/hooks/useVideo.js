import React from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../utils/slices/mediaSlice";

const useVideo = ({ movieId }) => {
  const dispatch = useDispatch();
  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addVideos(json));
  };
};

export default useVideo;
