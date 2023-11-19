import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  if (!movies) return;

  const mainMovie = movies[4];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} mute={"&mute=1&controls=0&rel=0"} />
    </div>
  );
};

export default MainContainer;
