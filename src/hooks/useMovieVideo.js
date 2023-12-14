import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/slices/moviesSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addVideos } from "../utils/slices/mediaSlice";

const useMovieVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data?.json();

    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    dispatch(addMovieTrailer(trailer));
    dispatch(addVideos(json));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
};

export default useMovieVideo;
