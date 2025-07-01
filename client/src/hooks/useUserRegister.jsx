import { useMutation } from "@tanstack/react-query";
import { registerUserRequest } from "../services/authentication.services";
import { useState } from "react";

export const useUserRegister = (onSuccess, onError) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: (variables) => registerUserRequest(variables),
    onSuccess: onSuccess,
    onError: onError,
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    mutation.mutate({ username, email, password });
  }

  return { mutation, setUsername, setEmail, setPassword, onSubmitHandler };
};
