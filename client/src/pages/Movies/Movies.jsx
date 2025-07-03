import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { useTrendingData } from "../../hooks/useTrendingData";
import { getMoviesByList } from "../../services/movies.services";
import { MediaPosterSlider } from "../../components/MediaPosterSlider/MediaPosterSlider";
import { PageLoadingOverlay } from "../../components/PageLoadingOverlay/PageLoadingOverlay";

export const Movies = () => {
  const trending = useTrendingData("movie");

  // All lists requests
  const nowPlaying = useQuery({
    queryKey: ["movies-list", "now_playing", 1],
    queryFn: () => getMoviesByList("now_playing", 1),
    retry: false,
    staleTime: 600000,
  });

  const popular = useQuery({
    queryKey: ["movies-list", "popular", 1],
    queryFn: () => getMoviesByList("popular", 1),
    retry: false,
    staleTime: 600000,
  });

  const topRated = useQuery({
    queryKey: ["movies-list", "top_rated", 1],
    queryFn: () => getMoviesByList("top_rated", 1),
    retry: false,
    staleTime: 600000,
  });

  const upcoming = useQuery({
    queryKey: ["movies-list", "upcoming", 1],
    queryFn: () => getMoviesByList("upcoming", 1),
    retry: false,
    staleTime: 600000,
  });

  return (
    <main className=" min-h-screen">
      <PageLoadingOverlay isLoading={trending.query.isLoading} />

      <div className=" w-[95%] max-w-[1400px] mx-auto space-y-12">
        <MediaBackdropSlider
          results={trending.query.data?.results}
          isSuccess={trending.query.isSuccess}
          isLoading={trending.query.isLoading}
          error={trending.query.error}
        />

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">Now Playing</h2>

          <MediaPosterSlider
            results={nowPlaying?.data?.results}
            isSuccess={nowPlaying.isSuccess}
            isLoading={nowPlaying.isLoading}
            media_type={"movie"}
          />
        </section>

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">Popular</h2>

          <MediaPosterSlider
            results={popular?.data?.results}
            isSuccess={popular.isSuccess}
            isLoading={popular.isLoading}
            error={popular.error}
            media_type={"movie"}
          />
        </section>

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">Top Rated</h2>

          <MediaPosterSlider
            results={topRated?.data?.results}
            isSuccess={topRated.isSuccess}
            isLoading={topRated.isLoading}
            error={topRated.error}
            media_type={"movie"}
          />
        </section>

        <section className=" space-y-5">
          <h2 className=" text-2xl font-bold">Upcoming</h2>

          <MediaPosterSlider
            results={upcoming?.data?.results}
            isSuccess={upcoming.isSuccess}
            isLoading={upcoming.isLoading}
            error={upcoming.error}
            media_type={"movie"}
          />
        </section>
      </div>
    </main>
  );
};
