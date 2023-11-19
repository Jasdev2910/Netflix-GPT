import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/slices/moviesSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addVideos } from "../utils/slices/mediaSlice";

const useMovieVideo = (id) => {
  const [videos, setVideos] = useState(null);
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data?.json();

    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterData?.length ? filterData[0] : json?.results[0];

    dispatch(addMovieTrailer(trailer));
    console.log(json);
    setVideos(json);
    console.log(videos);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return videos;
};

export default useMovieVideo;
