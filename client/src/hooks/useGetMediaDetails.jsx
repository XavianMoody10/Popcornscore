import { useQuery } from "@tanstack/react-query";
import { getMediaDetails } from "../services/details.services";

export const useGetMediaDetails = (mediaType, mediaId) => {
  const query = useQuery({
    queryKey: [mediaType, mediaId],
    queryFn: () => getMediaDetails(mediaType, mediaId),
    retry: false,
  });

  return query;
};
