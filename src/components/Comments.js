import React from "react";
import Review from "./Review";
import Header from "./Header";
import { useSelector } from "react-redux";

const Comments = () => {
  const review = useSelector((store) => store?.reviews?.review);

  return (
    <div>
      <Header />
      <div className="pt-[120px] px-10">
        <h2 className="text-xl font-bold">Reviews</h2>
        {review?.results?.map((review) => (
          <Review
            key={review?.id}
            userName={review?.author_details?.username}
            rating={review?.author_details?.rating}
            date={review?.created_at}
            content={review?.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
