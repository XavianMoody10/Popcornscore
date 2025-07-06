import { IoIosStar as StarIcon } from "react-icons/io";

export const ReviewCard = ({ id, title, review, username, rating }) => {
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

      <div>
        <span className=" font-semibold">~ {username}</span>
      </div>
    </div>
  );
};
