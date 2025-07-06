import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

export const GenresSlider = ({ data, mediaType }) => {
  const genresMap = data?.genres?.map((g) => {
    return (
      <SwiperSlide>
        <Link to={`/collection/genres/${mediaType}/${g.id}`}>
          <div className=" h-[120px] border border-gray-300 flex items-center justify-center rounded-md text-[#947EE6] hover:bg-[#947EE6] hover:text-white duration-150">
            <span className=" text-lg font-bold">{g.name}</span>
          </div>
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <div className=" h-[120px]">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        breakpoints={{
          400: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.1,
          },
          900: {
            slidesPerView: 3.1,
          },
          1280: {
            slidesPerView: 4.1,
          },
        }}
      >
        {genresMap}
      </Swiper>
    </div>
  );
};
