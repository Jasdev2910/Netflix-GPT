import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieVideo = (id) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results?.filter(
      (video) => video.type === "Teaser"
    );

    const trailer = filterData?.length ? filterData[0] : json?.results[0];

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, []);
};

export default useMovieVideo;
