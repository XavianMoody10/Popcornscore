import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MediaBackdrop } from "../MediaBackdrop/MediaBackdrop";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
import { FaChevronCircleLeft as LeftArrow } from "react-icons/fa";
import { FaChevronCircleRight as RightArrow } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

export const MediaBackdropSlider = ({
  results,
  isSuccess,
  error,
  isLoading,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const data = results?.filter((data) => data.id);

  const slides = data?.map((data) => {
    return (
      <SwiperSlide key={data.id}>
        <MediaBackdrop mediaData={data} />
      </SwiperSlide>
    );
  });

  const bullets = data?.map((data, index) => {
    if (currentSlide === index) {
      return (
        <div
          key={data.id}
          className=" h-[13px] w-[13px] bg-purple-500 rounded-full"
        ></div>
      );
    } else {
      return (
        <div
          key={data.id}
          className=" h-[13px] w-[13px] bg-black rounded-full"
        ></div>
      );
    }
  });

  return (
    <div className=" border border-gray-200 h-[650px] relative space-y-5">
      {isSuccess && (
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(e, v) => setCurrentSlide(e.activeIndex)}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {slides}
        </Swiper>
      )}

      {error && (
        <div className=" h-[650px] flex flex-col items-center justify-center">
          <span className=" text-red-500 font-semibold text-2xl">
            {error.message}
          </span>
          <ErrorIcon size={50} className=" text-red-500" />
        </div>
      )}

      {isLoading && (
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <ClipLoader color="#947EE6" />
        </div>
      )}

      {isSuccess && (
        <div className="items-center justify-center gap-4 hidden lg:flex">
          <LeftArrow
            size={22}
            color="#947EE6"
            className=" cursor-pointer hover:scale-125 duration-150"
            onClick={goToPrevSlide}
          />

          <div className=" flex items-center justify-center gap-2">
            {bullets}
          </div>

          <RightArrow
            size={22}
            color="#947EE6"
            className=" cursor-pointer hover:scale-125 duration-150"
            onClick={goToNextSlide}
          />
        </div>
      )}
    </div>
  );
};
