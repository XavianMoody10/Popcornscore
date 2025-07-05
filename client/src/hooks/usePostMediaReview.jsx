import { useMutation } from "@tanstack/react-query";
import { postReviewRequest } from "../services/review.services";
import { useState } from "react";
import { useSelector } from "react-redux";

export const usePostMediaReview = (
  mediaType,
  mediaId,
  onSuccessEvent,
  onErrorEvent
) => {
  const { _id } = useSelector((state) => state.user.value);
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);

  const mutation = useMutation({
    mutationFn: (variables) => postReviewRequest(variables),
    onError: onErrorEvent,
    onSuccess: onSuccessEvent,
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    mutation.mutate({ userId: _id, mediaId, mediaType, title, review, rating });
  }

  return {
    mutation,
    review,
    setReview,
    title,
    setTitle,
    rating,
    setRating,
    onSubmitHandler,
  };
};
