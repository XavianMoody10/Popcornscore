import { useQuery } from "@tanstack/react-query";
import { getTrendingMedia } from "../services/trending.services";

export const useTrendingData = (mediaType) => {
  const query = useQuery({
    queryKey: ["trending", mediaType],
    queryFn: () => getTrendingMedia(mediaType),
    retry: false,
  });

  return { query };
};
