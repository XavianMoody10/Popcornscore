import { createContext } from "react";
import { useUserStatus } from "../hooks/useUserStatus";

export const UserStatusContext = createContext();

export const UserStatusProvider = ({ children }) => {
  const status = useUserStatus();

  return (
    <UserStatusContext.Provider value={null}>
      {children}
    </UserStatusContext.Provider>
  );
};
