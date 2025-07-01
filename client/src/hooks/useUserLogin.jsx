import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { loginUserRequest } from "../services/authentication.services";

export const useUserLogin = (onSuccess, onError) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: (variables) => loginUserRequest(variables),
    onSuccess: onSuccess,
    onError: onError,
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    mutation.mutate({ email, password });
  }

  return { mutation, setEmail, setPassword, onSubmitHandler };
};
