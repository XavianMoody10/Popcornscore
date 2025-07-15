import { IoIosStar as StarIcon } from "react-icons/io";
import { FaTrash as TrashIcon } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { deleteReview } from "../../services/review.services";
import { queryClient } from "../../App";

export const ReviewCard = ({
  userId,
  reviewId,
  title,
  review,
  username,
  rating,
  mediaId,
  mediaType,
}) => {
  const { _id } = useSelector((state) => state.user.value);

  const mutation = useMutation({
    mutationFn: (variables) => deleteReview(variables),
    onError: (error) => {
      console.log(error.message);
    },
    onSuccess: (data) => {
      console.log("Yo");
      queryClient.setQueryData(["reviews", mediaType, mediaId], data);
    },
  });

  console.log(mediaType);

  function deleteReviewHandler() {
    mutation.mutate({ mediaId, reviewId });
  }

  return (
    <div className=" bg-white border border-gray-300 min-[1400px]:max-w-[554px] p-4 rounded-md flex flex-col gap-2">
      <div className=" flex justify-between">
        <span className=" font-bold text-lg text-[#947EE6]">{title}</span>

        <div className=" flex items-center gap-1">
          <StarIcon size={22} color="#947EE6" />
          <span>{rating}</span>
        </div>
      </div>

      <div className=" min-h-[150px] max-h-[150px] overflow-y-auto pr-3">
        <p>{review}</p>
      </div>

      <div className=" flex items-center justify-between">
        <span className=" font-semibold">~ {username}</span>

        {userId === _id && (
          <TrashIcon
            color="#947EE6"
            size={22}
            cursor={"pointer"}
            onClick={deleteReviewHandler}
          />
        )}
      </div>
    </div>
  );
};
