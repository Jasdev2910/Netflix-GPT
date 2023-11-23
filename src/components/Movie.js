import React, { useEffect } from "react";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import { useParams } from "react-router-dom";

const Movie = () => {
  const movieId = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);
  return (
    <div className="">
      <TopContainer />
      <MiddleContainer />
    </div>
  );
};

export default Movie;
