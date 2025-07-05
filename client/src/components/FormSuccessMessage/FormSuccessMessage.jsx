import { FaRegCheckCircle as CheckmarkIcon } from "react-icons/fa";

export const FormSuccessMessage = ({ successMessage }) => {
  return (
    <>
      {successMessage && (
        <div className=" bg-green-500 w-full flex justify-center items-center gap-2 py-3 rounded-md">
          <span className=" text-white font-semibold">{successMessage}</span>
          <CheckmarkIcon className=" text-white" size={25} />
        </div>
      )}
    </>
  );
};
