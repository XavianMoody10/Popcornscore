import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/movies.services";

export const useGetMediaDetails = (mediaId) => {
  const query = useQuery({
    queryKey: ["movie", mediaId],
    queryFn: () => getMovieDetails(mediaId),
    retry: false,
  });

  return query;
};
