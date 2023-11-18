import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useCredit from "./../hooks/useCredit";
import CastCard from "./CastCard";
import useReview from "../hooks/useReview";
import Review from "./Review";

const MiddleContainer = () => {
  const movieId = useParams();
  useCredit(movieId);
  useReview(movieId);
  const cast = useSelector((store) => store.credits.cast);
  const review = useSelector((store) => store.reviews.review);
  return (
    <div className="px-8 py-5">
      <h3 className="font-semibold text-2xl">Top Billed Cast</h3>
      <div className="pt-2 flex overflow-x-scroll no-scrollbar scroll-smooth ">
        {cast?.cast?.map((cast) => (
          <CastCard
            img_path={cast?.profile_path}
            name={cast?.name}
            character={cast?.character}
          />
        ))}
      </div>
      <div className="px-5 py-5">
        <h2 className="font-semibold text-2xl pt-3">Social</h2>
        <div className="overflow-y-scroll no-scrollbar scroll-smooth ">
          {review?.results?.map((review) => (
            <Review
              userName={review?.author_details?.username}
              rating={review?.author_details?.rating}
              date={review?.created_at}
              content={review?.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleContainer;
