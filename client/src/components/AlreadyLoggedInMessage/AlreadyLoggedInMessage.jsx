import { useUserLogout } from "../../hooks/useUserLogout";

export const AlreadyLoggedInMessage = () => {
  const logout = useUserLogout();

  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-3">
      <span className=" text-2xl font-bold">Your already logged in</span>
      <button
        onClick={() => logout.mutate()}
        className=" py-2 w-full font-semibold bg-[#a695ff] text-white rounded-sm hover:bg-[#947EE6]"
      >
        Logout
      </button>
    </div>
  );
};
