import { FormButton } from "../FormButton/FormButton";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { FormWrapper } from "../FormWrapper/FormWrapper";

export const LoginForm = ({
  onChangeEmailEvent,
  onChangePasswordEvent,
  onSubmitHandler,
}) => {
  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <div className=" flex flex-col gap-2">
        <FormTextInput
          type={"email"}
          placeholder={"Email"}
          onChange={onChangeEmailEvent}
        />
        <FormTextInput
          type={"password"}
          placeholder={"Password"}
          onChange={onChangePasswordEvent}
        />
      </div>

      <FormButton>Login</FormButton>
    </FormWrapper>
  );
};
