import React, { useEffect } from "react";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPath } from "../utils/slices/pathSlice";
import Shimmer from "./Shimmer";
import { addMovieClicked } from "../utils/slices/moviePageSlice";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieVideo from "../hooks/useMovieVideo";

const Movie = () => {
  const movieId = useParams();
  const dispatch = useDispatch();
  useMovieDetails(movieId.movieId);

  const details = useSelector((store) => store?.moviePageDetails);
  useMovieVideo(details?.movieDetails?.id);

  const clickedMovieId = useSelector(
    (store) => store.moviePageDetails?.movieClicked
  );

  const pathname = window.location.pathname.slice(7);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(addPath(window.location.pathname.slice(0, 6)));
    dispatch(addMovieClicked(pathname));
  }, [movieId]);

  return details.movieDetails === null ||
    details?.movieDetails?.id != clickedMovieId ? (
    <Shimmer />
  ) : (
    <div className="">
      <TopContainer />
      <MiddleContainer />
    </div>
  );
};

export default Movie;
