import { useQuery } from "@tanstack/react-query";
import { getMediaReviewsRequest } from "../services/review.services";

export const useGetMediaReviews = (mediaType, mediaId) => {
  const query = useQuery({
    queryKey: ["reviews", mediaType, mediaId],
    queryFn: () => getMediaReviewsRequest(mediaType, mediaId),
    retry: false,
  });

  return query;
};
