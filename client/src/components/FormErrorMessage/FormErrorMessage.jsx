import { MdOutlineErrorOutline as ErrorIcon } from "react-icons/md";

export const FormErrorMessage = ({ errorMessage }) => {
  return (
    <>
      {errorMessage && (
        <div className=" bg-red-500 w-full max-w-[350px] flex justify-center items-center gap-2 py-3 rounded-md">
          <span className=" text-white font-semibold">{errorMessage}</span>
          <ErrorIcon className=" text-white" size={25} />
        </div>
      )}
    </>
  );
};
