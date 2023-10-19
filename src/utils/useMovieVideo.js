import { useDispatch } from "react-redux";
import { addMovieTrailer } from "./moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "./constants";

const useMovieVideo = (id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    console.log(json);
    const filterData = json?.results?.filter(
      (video) => video.type === "Teaser"
    );

    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    console.log(trailer);
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieVideo;
