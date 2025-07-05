import { FaRegCircleUser as UserIcon } from "react-icons/fa6";
import { LuUser as CurrentUserIcon } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useUserLogout } from "../hooks/useUserLogout";

export const Header = () => {
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const logout = useUserLogout();
  const { _id, username } = useSelector((state) => state.user.value);
  const location = useLocation();

  return (
    <header className=" sticky top-0 w-full py-6 bg-white z-10 space-y-4">
      <div className=" flex items-center justify-between w-[95%] max-w-[1400px] mx-auto">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            width={130}
            className=" min-[500px]:w-[180px]"
          />
        </Link>

        <>
          {!_id ? (
            <Link to={"/login"}>
              <UserIcon
                size={28}
                className=" text-gray-300 hover:text-[#947EE6] duration-150"
              />
            </Link>
          ) : (
            <div className=" relative select-none">
              <div className=" flex items-end gap-2">
                <span className=" font-medium">{username}</span>

                <CurrentUserIcon
                  size={28}
                  className=" text-gray-300 hover:text-[#947EE6] duration-150 cursor-pointer"
                  onClick={() => setSettingsIsOpen((prev) => !prev)}
                />
              </div>

              {settingsIsOpen && (
                <div className=" absolute bottom-[-50px] w-full">
                  <button
                    onClick={() => logout.query.refetch()}
                    className=" py-2 w-full font-semibold bg-[#a695ff] text-white rounded-sm hover:bg-[#947EE6]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      </div>

      <div className=" flex items-center w-[95%] max-w-[1400px] mx-auto">
        <div className=" flex gap-1 w-[200px] h-[40px]">
          <Link
            to={"/movie"}
            className=" w-full text-sm text-center font-semibold border border-gray-200 shadow rounded-sm flex items-center justify-center hover:shadow-lg duration-150"
            style={{
              color: location.pathname === "/movie" && "white",
              backgroundColor: location.pathname === "/movie" && "#947EE6",
            }}
          >
            Movies
          </Link>
          <Link
            to={"/tv"}
            className=" w-full text-sm text-center font-semibold border border-gray-200 shadow rounded-sm flex items-center justify-center hover:shadow-lg duration-150"
            style={{
              color: location.pathname === "/tv" && "white",
              backgroundColor: location.pathname === "/tv" && "#947EE6",
            }}
          >
            TV Shows
          </Link>
        </div>
      </div>
    </header>
  );
};
