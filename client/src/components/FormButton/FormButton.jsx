export const FormButton = ({ children }) => {
  return (
    <button className=" cursor-pointer w-full bg-[#a695ff] text-white font-semibold py-2 rounded-md text-lg hover:bg-[#947EE6] duration-150">
      {children}
    </button>
  );
};
