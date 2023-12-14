import React, { useEffect } from "react";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addPath } from "../utils/slices/pathSlice";
import Footer from "./Footer";
import Shimmer from "./Shimmer";
import { addMovieClicked } from "../utils/slices/moviePageSlice";
import useMovieDetails from "../hooks/useMovieDetails";

const Movie = () => {
  const movieId = useParams();
  const dispatch = useDispatch();
  useMovieDetails(movieId);
  const details = useSelector((store) => store?.moviePageDetails);

  const clickedMovieId = useSelector(
    (store) => store.moviePageDetails?.movieClicked
  );

  const pathname = window.location.pathname.slice(7);
  dispatch(addMovieClicked(pathname));
  console.log(pathname);
  dispatch(addPath(window.location.pathname));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);

  return details.movieDetails === null ||
    details.movieDetails.id != clickedMovieId ? (
    <Shimmer />
  ) : (
    <div className="">
      <Header />
      <TopContainer />
      <MiddleContainer />
      <Footer />
    </div>
  );
};

export default Movie;
