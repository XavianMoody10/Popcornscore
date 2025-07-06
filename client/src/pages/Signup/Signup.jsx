import { FormErrorMessage } from "../../components/FormErrorMessage/FormErrorMessage";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../app/features/user/userSlice";
import { useUserRegister } from "../../hooks/useUserRegister";
import { SignupForm } from "../../components/SignupForm/SignupForm";
import { AlreadyLoggedInMessage } from "../../components/AlreadyLoggedInMessage/AlreadyLoggedInMessage";

export const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const register = useUserRegister(onSuccess, onError);
  const { _id } = useSelector((state) => state.user.value);
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

      {_id && !register.mutation.isPending ? (
        <AlreadyLoggedInMessage />
      ) : (
        <>
          <div className=" w-full flex flex-col items-center gap-3 max-w-[400px]">
            <FormErrorMessage errorMessage={errorMessage} />

            <SignupForm
              onChangeUsernameEvent={(e) =>
                register.setUsername(e.target.value)
              }
              onChangeEmailEvent={(e) => register.setEmail(e.target.value)}
              onChangePasswordEvent={(e) =>
                register.setPassword(e.target.value)
              }
              onSubmitHandler={register.onSubmitHandler}
            />
          </div>

          <Link
            to={"/login"}
            className=" text-gray-500 font-semibold hover:text-black duration-150"
          >
            Already a user?
          </Link>
        </>
      )}
    </main>
  );
};
