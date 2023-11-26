import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useCredit from "./../hooks/useCredit";
import CastCard from "./CastCard";
import useReview from "../hooks/useReview";
import Review from "./Review";
import useMovieVideo from "../hooks/useMovieVideo";
import YoutubeFrame from "./YoutubeFrame";
import useVideo from "../hooks/useVideo";
import useSimilarMovies from "../hooks/useSimilarMovies";
import MovieList from "./MovieList";
import useRecommendation from "../hooks/useRecommendation";

const MiddleContainer = () => {
  const movieId = useParams();

  useCredit(movieId);
  useReview(movieId);
  useVideo(movieId);
  useSimilarMovies(movieId);
  useRecommendation(movieId);

  const cast = useSelector((store) => store.credits.cast);
  const review = useSelector((store) => store.reviews.review);
  const movies = useSelector((store) => store.movies);
  const videos = useSelector((store) => store.media.videos);
  return (
    <div className="px-8 py-5 ">
      <h3 className="font-semibold text-2xl text-black">Top Billed Cast</h3>
      <div className="pt-2 flex overflow-x-scroll no-scrollbar scroll-smooth">
        {cast?.cast?.map((cast) => (
          <CastCard
            key={cast?.id}
            img_path={cast?.profile_path}
            name={cast?.name}
            character={cast?.character}
          />
        ))}
      </div>
      <div className="px-5 py-5 ">
        <h2 className="font-semibold text-2xl pt-3 text-black">Social</h2>
        <div className="overflow-y-scroll no-scrollbar scroll-smooth ">
          {review?.results?.map((review) => (
            <Review
              key={review.id}
              userName={review?.author_details?.username}
              rating={review?.author_details?.rating}
              date={review?.created_at}
              content={review?.content}
            />
          ))}
        </div>
      </div>
      <div className="  overflow-x-scroll no-scrollbar scroll-smooth">
        <MovieList
          title={"Similar"}
          movies={movies.similarMovies}
          textColor={"text-black"}
        />
      </div>
      <div className="  overflow-x-scroll no-scrollbar scroll-smooth">
        <MovieList
          title={"Recommended"}
          movies={movies.recommended}
          textColor={"text-black"}
        />
      </div>
    </div>
  );
};

export default MiddleContainer;
