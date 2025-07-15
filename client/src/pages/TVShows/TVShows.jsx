import { useQuery } from "@tanstack/react-query";
import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { MediaPosterSlider } from "../../components/MediaPosterSlider/MediaPosterSlider";
import { useTrendingData } from "../../hooks/useTrendingData";
import { getTVShowsByList } from "../../services/tvShows.services";
import { PageLoadingOverlay } from "../../components/PageLoadingOverlay/PageLoadingOverlay";
import { getGenreList } from "../../services/genres.services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GenresSlider } from "../../components/GenresSlider/GenresSlider";

export const TVShows = () => {
  const trending = useTrendingData("tv");

  // All lists requests
  const airingToday = useQuery({
    queryKey: ["tv-list", "airing_today", 1],
    queryFn: () => getTVShowsByList("airing_today", 1),
    retry: false,
    staleTime: 600000,
  });

  const onTheAir = useQuery({
    queryKey: ["tv-list", "on_the_air", 1],
    queryFn: () => getTVShowsByList("on_the_air", 1),
    retry: false,
    staleTime: 600000,
  });

  const popular = useQuery({
    queryKey: ["tv-list", "popular", 1],
    queryFn: () => getTVShowsByList("popular", 1),
    retry: false,
    staleTime: 600000,
  });

  const topRated = useQuery({
    queryKey: ["tv-list", "top_rated", 1],
    queryFn: () => getTVShowsByList("top_rated", 1),
    retry: false,
    staleTime: 600000,
  });

  const genres = useQuery({
    queryKey: ["genres", "tv"],
    queryFn: () => getGenreList("tv"),
    retry: false,
    staleTime: 600000,
  });

  return (
    <main className=" min-h-screen pb-4">
      <PageLoadingOverlay isLoading={trending.query.isLoading} />

      <div className=" w-[95%] max-w-[1400px] mx-auto space-y-20">
        <MediaBackdropSlider
          results={trending.query.data?.results}
          isSuccess={trending.query.isSuccess}
          isLoading={trending.query.isLoading}
          error={trending.query.error}
        />

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">Airing Today</h2>

          <MediaPosterSlider
            results={airingToday?.data?.results}
            isSuccess={airingToday.isSuccess}
            isLoading={airingToday.isLoading}
            error={airingToday.error}
            media_type={"tv"}
          />
        </section>

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">On The Air</h2>

          <MediaPosterSlider
            results={onTheAir?.data?.results}
            isSuccess={onTheAir.isSuccess}
            isLoading={onTheAir.isLoading}
            error={onTheAir.error}
            media_type={"tv"}
          />
        </section>

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">Popular</h2>

          <MediaPosterSlider
            results={popular?.data?.results}
            isSuccess={popular.isSuccess}
            isLoading={popular.isLoading}
            error={popular.error}
            media_type={"tv"}
          />
        </section>

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">Top Rated</h2>

          <MediaPosterSlider
            results={topRated?.data?.results}
            isSuccess={topRated.isSuccess}
            isLoading={topRated.isLoading}
            error={topRated.error}
            media_type={"tv"}
          />
        </section>

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">Genres</h2>
          <GenresSlider data={genres.data} mediaType={"tv"} />
        </section>
      </div>
    </main>
  );
};
