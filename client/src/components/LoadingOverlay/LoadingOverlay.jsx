import { ClipLoader } from "react-spinners";

export const LoadingOverlay = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/60 z-50">
      <ClipLoader color="white" size={50} />
    </div>
  );
};
