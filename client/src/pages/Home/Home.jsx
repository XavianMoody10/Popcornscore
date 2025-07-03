import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { useTrendingData } from "../../hooks/useTrendingData";

export const Home = () => {
  const trending = useTrendingData("all");

  return (
    <main className=" min-h-screen">
      <div className=" w-[95%] max-w-[1400px] mx-auto space-y-12">
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
