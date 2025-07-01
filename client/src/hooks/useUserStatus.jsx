import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserStatusRequest } from "../services/authentication.services";
import { useQuery } from "@tanstack/react-query";
import { updateUser } from "../app/features/user/userSlice";

export const useUserStatus = () => {
  const dispatch = useDispatch();

  const query = useQuery({
    queryFn: checkUserStatusRequest,
    queryKey: ["user-status"],
    retry: false,
    staleTime: 0,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(updateUser(query.data));
    }
  }, [query.isSuccess]);

  return { query };
};
