import React from "react";
import Review from "./Review";
import Header from "./Header";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Comments = () => {
  const review = useSelector((store) => store?.reviews?.review);

  return (
    <div className="w-full min-h-screen bg-[#caf0f8]">
      <Header />
      <div className="pt-[120px] pb-5 px-10 text-black ">
        <h2 className="text-3xl font-bold text-[#353535]">Reviews</h2>
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
      <Footer />
    </div>
  );
};

export default Comments;
