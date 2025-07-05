import { FormTextInput } from "../../components/FormTextInput/FormTextInput";
import { FormErrorMessage } from "../../components/FormErrorMessage/FormErrorMessage";
import { useState } from "react";
import { FormButton } from "../../components/FormButton/FormButton";
import { Link, useNavigate } from "react-router-dom";
import { FormWrapper } from "../../components/FormWrapper/FormWrapper";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { useDispatch } from "react-redux";
import { updateUser } from "../../app/features/user/userSlice";
import { useUserRegister } from "../../hooks/useUserRegister";

export const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const register = useUserRegister(onSuccess, onError);
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
      {register.mutation.isPending && <LoadingOverlay />}

      <div className=" w-full flex flex-col items-center gap-3 max-w-[400px]">
        <FormErrorMessage errorMessage={errorMessage} />

        <FormWrapper onSubmit={register.onSubmitHandler}>
          <div className=" flex flex-col gap-2">
            <FormTextInput
              type={"text"}
              placeholder={"Username"}
              onChange={(e) => register.setUsername(e.target.value)}
            />
            <FormTextInput
              type={"email"}
              placeholder={"Email"}
              onChange={(e) => register.setEmail(e.target.value)}
            />
            <FormTextInput
              type={"password"}
              placeholder={"Password"}
              onChange={(e) => register.setPassword(e.target.value)}
            />
          </div>

          <FormButton>Signup</FormButton>
        </FormWrapper>
      </div>

      <Link
        to={"/login"}
        className=" text-gray-500 font-semibold hover:text-black duration-150"
      >
        Already a user?
      </Link>
    </main>
  );
};
