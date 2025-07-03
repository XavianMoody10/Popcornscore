import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosInformationCircleOutline as InfoIcon } from "react-icons/io";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export const MediaPosterSlider = ({
  results,
  isSuccess,
  isLoading,
  error,
  media_type,
}) => {
  const slides = results?.map((data) => {
    const posterUrl = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
    const id = data.id;
    const title = data.title || data.name || data.original_title;
    const mediaType = data.media_type || media_type;

    return (
      <SwiperSlide key={id}>
        <div className=" relative">
          <img src={posterUrl} alt={title} />

          <Link
            to={`/${mediaType}/details/${id}`}
            className=" absolute top-0 right-0 left-0 bottom-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 duration-150"
          >
            <InfoIcon
              color="white"
              size={50}
              className=" hover:scale-125 duration-150"
            />
          </Link>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className=" min-h-[250px] relative">
      {isSuccess && (
        <Swiper
          slidesPerView={1.1}
          spaceBetween={8}
          breakpoints={{
            400: {
              slidesPerView: 2.1,
            },
            640: {
              slidesPerView: 3.1,
            },
            1024: {
              slidesPerView: 4.1,
            },
            1300: {
              slidesPerView: 5.1,
            },
          }}
        >
          {slides}
        </Swiper>
      )}

      {isLoading && (
        <div className="  border border-gray-200 absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center z-10">
          <ClipLoader color="#947EE6" />
        </div>
      )}

      {error && (
        <div className=" border border-gray-200 absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center">
          <span className=" text-red-500 font-semibold text-2xl">
            {error.message}
          </span>
          <ErrorIcon size={50} className=" text-red-500" />
        </div>
      )}
    </div>
  );
};
