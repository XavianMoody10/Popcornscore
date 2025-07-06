import { FormButton } from "../FormButton/FormButton";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { FormWrapper } from "../FormWrapper/FormWrapper";

export const SignupForm = ({
  onChangeUsernameEvent,
  onChangeEmailEvent,
  onChangePasswordEvent,
  onSubmitHandler,
}) => {
  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <div className=" flex flex-col gap-2">
        <FormTextInput
          type={"text"}
          placeholder={"Username"}
          onChange={onChangeUsernameEvent}
        />
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

      <FormButton>Signup</FormButton>
    </FormWrapper>
  );
};
