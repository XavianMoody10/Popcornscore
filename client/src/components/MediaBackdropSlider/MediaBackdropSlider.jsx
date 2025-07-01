import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MediaBackdrop } from "../MediaBackdrop/MediaBackdrop";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { Autoplay } from "swiper/modules";

export const MediaBackdropSlider = ({
  results,
  isSuccess,
  error,
  isLoading,
}) => {
  const slides = results?.map((data) => {
    return (
      <SwiperSlide key={data.id}>
        <MediaBackdrop mediaData={data} />
      </SwiperSlide>
    );
  });

  return (
    <div className=" border border-gray-200  h-[650px] relative">
      {isSuccess && (
        <Swiper
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
    </div>
  );
};
