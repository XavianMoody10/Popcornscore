import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosInformationCircleOutline as InfoIcon } from "react-icons/io";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { MediaPoster } from "../MediaPoster/MediaPoster";
import { FaChevronCircleLeft as LeftArrow } from "react-icons/fa";
import { FaChevronCircleRight as RightArrow } from "react-icons/fa";
import { Swiper as SwiperInterface } from "swiper";
import { useState } from "react";

export const MediaPosterSlider = ({
  results,
  isSuccess,
  isLoading,
  error,
  media_type,
}) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const goToNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const slides = results?.map((data) => {
    return (
      <SwiperSlide key={data.id}>
        <MediaPoster data={data} media_type={media_type} />
      </SwiperSlide>
    );
  });

  return (
    <div className=" min-h-[250px] relative select-none">
      {isSuccess && (
        <div className=" hidden lg:block">
          <div
            onClick={goToPrevSlide}
            className=" absolute top-0 bottom-0 left-0 bg-[#947EE6]/45 hover:bg-[#947EE6]/80 z-10 px-1 flex items-center justify-center"
          >
            <LeftArrow color="white" size={30} />
          </div>
          <div
            onClick={goToNextSlide}
            className=" absolute top-0 bottom-0 right-0 bg-[#947EE6]/45 hover:bg-[#947EE6]/80 z-10 px-1 flex items-center justify-center"
          >
            <RightArrow color="white" size={30} />
          </div>
        </div>
      )}

      {isSuccess && (
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
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
