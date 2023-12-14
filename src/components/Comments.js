import React from "react";
import Review from "./Review";
import Header from "./Header";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import NoCommentsIcon from "../assets/no-comments.png";

const Comments = () => {
  const review = useSelector((store) => store?.reviews?.review);

  return (
    <div className="w-full min-h-screen bg-[#caf0f8]">
      <Header />
      <div className="pt-16 px-5 md:pt-[120px] md:pb-5 md:px-10 text-black ">
        <h2 className="text-3xl font-bold text-[#353535]">Reviews</h2>
        {(review?.total_results === 0 || review === null) && (
          <div className="w-[200px] md:w-[300px] py-48 md:py-20 relative top-60 md:top-48 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <img src={NoCommentsIcon} alt="no-comments-icon" />
            <p className="text-center text-2xl font-bold text-[#023047]">
              No Comments Yet
            </p>
          </div>
        )}
        {review?.results?.map((review) => (
          <Review
            key={review?.id}
            userName={review?.author_details?.username}
            rating={review?.author_details?.rating}
            date={review?.created_at}
            content={review?.content}
            lineClamp={"line-clamp-4"}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Comments;
