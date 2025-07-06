import { useMutation } from "@tanstack/react-query";
import { logoutUserRequest } from "../services/authentication.services";
import { useDispatch } from "react-redux";
import { resetUser } from "../app/features/user/userSlice";

export const useUserLogout = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: () => logoutUserRequest(),
    onSuccess: () => {
      dispatch(resetUser());
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return mutation;
};
