export const FormTextArea = ({ name, id, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}
      id={id}
      rows="10"
      placeholder={placeholder}
      className=" border border-gray-300 rounded-md w-full p-3 resize-none outline-[#947EE6]"
      value={value}
      onChange={onChange}
    />
  );
};
