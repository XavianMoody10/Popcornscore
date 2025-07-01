import { useQuery } from "@tanstack/react-query";
import { logoutUserRequest } from "../services/authentication.services";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../app/features/user/userSlice";

export const useUserLogout = () => {
  const dispatch = useDispatch();

  const query = useQuery({
    queryKey: ["logout"],
    queryFn: logoutUserRequest,
    retry: false,
    staleTime: 0,
    enabled: false,
  });

  useEffect(() => {
    dispatch(resetUser());
  }, [query.isSuccess]);

  return { query };
};
