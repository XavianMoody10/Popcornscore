import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { useTrendingData } from "../../hooks/useTrendingData";

export const TVShows = () => {
  const trending = useTrendingData("tv");

  return (
    <main className=" min-h-screen">
      <div className=" w-[95%] max-w-[1400px] mx-auto">
        <MediaBackdropSlider
          results={trending.query.data?.results}
          isSuccess={trending.query.isSuccess}
          isLoading={trending.query.isLoading}
          error={trending.query.error}
        />
      </div>
    </main>
  );
};
