export const FormWrapper = ({ children, onSubmit }) => {
  return (
    <form className=" w-full space-y-3" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
