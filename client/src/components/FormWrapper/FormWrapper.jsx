export const FormWrapper = ({ children, onSubmit }) => {
  return (
    <form className=" w-[90%] max-w-[350px] space-y-3" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
