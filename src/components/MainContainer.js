import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  // if (!movies) return;

  const mainMovie = movies[4];

  const id = mainMovie?.id;
  const original_title = mainMovie?.original_title;
  const overview = mainMovie?.overview;
  useMovieVideo(id);

  return (
    <div className="">
      <VideoTitle id={id} title={original_title} overview={overview} />
      <div className="">
        <VideoBackground movieId={id} mute={"&mute=1&controls=0&rel=0"} />
      </div>
    </div>
  );
};

export default MainContainer;
