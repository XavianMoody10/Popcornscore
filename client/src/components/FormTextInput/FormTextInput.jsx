export const FormTextInput = ({
  type,
  placeholder,
  onChange,
  value,
  maxLength,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      className=" w-full border border-gray-300 p-2 rounded-sm outline-[#a695ff]"
      onChange={onChange}
    />
  );
};
