import { useState } from "react";
import { useParams } from "react-router-dom";
import { FormButton } from "../../components/FormButton/FormButton";
import Rating from "@mui/material/Rating";
import { FormTextInput } from "../../components/FormTextInput/FormTextInput";
import { FormErrorMessage } from "../../components/FormErrorMessage/FormErrorMessage";
import { queryClient } from "../../App";
import { ReviewsSlider } from "../../components/ReviewsSlider/ReviewsSlider";
import { MediaDetails } from "../../components/MediaDetails/MediaDetails";
import { FormSuccessMessage } from "../../components/FormSuccessMessage/FormSuccessMessage";
import { FormWrapper } from "../../components/FormWrapper/FormWrapper";
import { FormTextArea } from "../../components/FormTextArea/FormTextArea";
import { useGetMediaReviews } from "../../hooks/useGetMediaReviews";
import { useGetMediaDetails } from "../../hooks/useGetMediaDetails";
import { usePostMediaReview } from "../../hooks/usePostMediaReview";
import { PageLoadingOverlay } from "../../components/PageLoadingOverlay/PageLoadingOverlay";

export const MovieDetails = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { mediaId } = useParams();
  const reviews = useGetMediaReviews("movie", mediaId);
  const details = useGetMediaDetails("movie", mediaId);
  const postReview = usePostMediaReview(
    "movie",
    mediaId,
    onReviewPostSuccessEvent,
    onReviewPostErrorEvent
  );

  // Executes when review is successfully posted
  function onReviewPostSuccessEvent(data) {
    setErrorMessage("");
    postReview.setReview("");
    postReview.setRating(null);
    postReview.setTitle("");
    queryClient.setQueryData(["reviews", "movie", mediaId], data);
    setSuccessMessage("Review has been posted");
  }

  // Executes when review fails to post
  function onReviewPostErrorEvent(error) {
    setErrorMessage(error.message);
  }

  return (
    <main className=" min-h-screen pb-3">
      <PageLoadingOverlay isLoading={details.isLoading} />

      <div className=" w-[95%] max-w-[1400px] mx-auto space-y-12">
        <MediaDetails data={details.data} />

        <div className=" space-y-5">
          <h2 className=" text-2xl text-[#947EE6] font-bold border-b border-gray-300 pb-4">
            Reviews
          </h2>

          <ReviewsSlider reviews={reviews.data?.reviews} />
        </div>

        <div className=" space-y-5">
          <h2 className=" text-2xl text-[#947EE6] font-bold border-b border-gray-300 pb-4">
            Leave a review
          </h2>

          <div className=" max-w-[500px] space-y-4">
            <FormErrorMessage errorMessage={errorMessage} />
            <FormSuccessMessage successMessage={successMessage} />

            <FormWrapper onSubmit={postReview.onSubmitHandler}>
              <FormTextInput
                placeholder={"Overall Point"}
                value={postReview.title}
                onChange={(e) => postReview.setTitle(e.target.value)}
              />

              <FormTextArea
                name={"review"}
                id={"review"}
                placeholder={"Add your review"}
                value={postReview.review}
                onChange={(e) => postReview.setReview(e.target.value)}
              />

              <Rating
                name="half-rating"
                size="large"
                defaultValue={0}
                value={postReview.rating}
                precision={0.5}
                onChange={(e, v) => postReview.setRating(v)}
              />

              <FormButton>Submit Review</FormButton>
            </FormWrapper>
          </div>
        </div>
      </div>
    </main>
  );
};
