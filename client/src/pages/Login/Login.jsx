import { Link, useNavigate } from "react-router-dom";
import { FormErrorMessage } from "../../components/FormErrorMessage/FormErrorMessage";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { useState } from "react";
import { updateUser } from "../../app/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useUserLogin } from "../../hooks/useUserLogin";
import { AlreadyLoggedInMessage } from "../../components/AlreadyLoggedInMessage/AlreadyLoggedInMessage";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { _id } = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useUserLogin(onSuccess, onError);

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

      {_id ? (
        <AlreadyLoggedInMessage />
      ) : (
        <>
          <div className=" w-full flex flex-col items-center gap-3 max-w-[400px]">
            <FormErrorMessage errorMessage={errorMessage} />

            <LoginForm
              onChangeEmailEvent={(e) => login.setEmail(e.target.value)}
              onChangePasswordEvent={(e) => login.setPassword(e.target.value)}
              onSubmitHandler={login.onSubmitHandler}
            />
          </div>

          <Link
            to={"/signup"}
            className=" text-gray-500 font-semibold hover:text-black duration-150"
          >
            Are you new here?
          </Link>
        </>
      )}
    </main>
  );
};
