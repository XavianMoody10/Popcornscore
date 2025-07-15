import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ReviewCard } from "../ReviewCard/ReviewCard";

export const ReviewsSlider = ({
  reviews,
  filteredRating,
  mediaId,
  mediaType,
}) => {
  const reviewCards =
    filteredRating != "All"
      ? reviews
          ?.filter((data) => data.rating == filteredRating)
          .map((data) => {
            return (
              <SwiperSlide key={data._id}>
                <ReviewCard
                  title={data.title}
                  review={data.review}
                  username={data.user.username}
                  userId={data.user._id}
                  reviewId={data._id}
                  rating={data.rating}
                  mediaId={mediaId}
                  mediaType={mediaType}
                />
              </SwiperSlide>
            );
          })
          .reverse()
      : reviews
          ?.map((data) => {
            return (
              <SwiperSlide key={data._id}>
                <ReviewCard
                  title={data.title}
                  review={data.review}
                  username={data.user.username}
                  userId={data.user._id}
                  reviewId={data._id}
                  rating={data.rating}
                  mediaId={mediaId}
                  mediaType={mediaType}
                />
              </SwiperSlide>
            );
          })
          .reverse();

  return (
    <div className=" min-h-[250px]">
      {reviewCards?.length === 0 && (
        <div className=" h-[250px] w-full flex items-center justify-center">
          <p className=" text-2xl font-bold">No reviews</p>
        </div>
      )}

      <Swiper
        spaceBetween={10}
        breakpoints={{
          500: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.2,
          },
          1400: {
            slidesPerView: 2.5,
          },
        }}
      >
        {reviewCards}
      </Swiper>
    </div>
  );
};
