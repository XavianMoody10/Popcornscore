export const FormTextInput = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className=" border border-gray-300 p-2 rounded-sm outline-[#a695ff]"
      onChange={onChange}
    />
  );
};
