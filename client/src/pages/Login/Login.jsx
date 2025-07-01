import { Link, useNavigate } from "react-router-dom";
import { FormButton } from "../../components/FormButton/FormButton";
import { FormErrorMessage } from "../../components/FormErrorMessage/FormErrorMessage";
import { FormTextInput } from "../../components/FormTextInput/FormTextInput";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { FormWrapper } from "../../components/FormWrapper/FormWrapper";
import { useState } from "react";
import { updateUser } from "../../app/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useUserLogin } from "../../hooks/useUserLogin";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const login = useUserLogin(onSuccess, onError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSuccess(data) {
    dispatch(updateUser(data));
    navigate("/");
  }

  function onError(error) {
    setErrorMessage(error.message);
  }

  return (
    <main className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-3">
      {login.mutation.isPending && <LoadingOverlay />}

      <FormErrorMessage errorMessage={errorMessage} />

      <FormWrapper onSubmit={login.onSubmitHandler}>
        <div className=" flex flex-col gap-2">
          <FormTextInput
            type={"email"}
            placeholder={"Email"}
            onChange={(e) => login.setEmail(e.target.value)}
          />
          <FormTextInput
            type={"password"}
            placeholder={"Password"}
            onChange={(e) => login.setPassword(e.target.value)}
          />
        </div>

        <FormButton>Login</FormButton>
      </FormWrapper>

      <Link
        to={"/signup"}
        className=" text-gray-500 font-semibold hover:text-black duration-150"
      >
        Are you new here?
      </Link>
    </main>
  );
};
