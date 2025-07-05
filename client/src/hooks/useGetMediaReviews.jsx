import { useQuery } from "@tanstack/react-query";
import { getMediaReviewsRequest } from "../services/review.services";

export const useGetMediaReviews = (mediaId) => {
  const query = useQuery({
    queryKey: ["reviews", mediaId],
    queryFn: () => getMediaReviewsRequest(mediaId),
    retry: false,
  });

  return query;
};
