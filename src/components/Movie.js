import React, { useEffect } from "react";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addPath } from "../utils/slices/pathSlice";

const Movie = () => {
  const movieId = useParams();

  const pathname = window.location.pathname;
  console.log(pathname);

  const dispatch = useDispatch();

  dispatch(addPath(window.location.pathname));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);

  return (
    <div className="">
      <Header />
      <TopContainer />
      <MiddleContainer />
    </div>
  );
};

export default Movie;
