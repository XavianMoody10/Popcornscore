import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/movies.services";

export const MovieDetails = () => {
  const { mediaId } = useParams();

  const query = useQuery({
    queryKey: ["movie", mediaId],
    queryFn: () => getMovieDetails(mediaId),
    retry: false,
  });

  const posterUrl = `https://image.tmdb.org/t/p/original/${query.data?.poster_path}`;
  const title =
    query.data?.title || query.data?.name || query.data?.original_title;
  const overview = query.data?.overview;

  return (
    <main className=" min-h-screen">
      <div className=" w-[95%] max-w-[1400px] mx-auto space-y-12">
        <div className=" flex flex-col items-center gap-3 max-w-[400px] mx-auto min-[800px]:max-w-none min-[800px]:flex-row min-[800px]:justify-between min-[800px]:items-start min-[800px]:gap-16">
          <div className=" w-full max-w-[400px]">
            <img src={posterUrl} alt={title} className=" w-full" />
          </div>

          <div className=" text-center space-y-3 min-[800px]:text-start">
            <h2 className=" text-xl font-bold lg:text-2xl">{title}</h2>
            <p className=" lg:text-lg">{overview}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
