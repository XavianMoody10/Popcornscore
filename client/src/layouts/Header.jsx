import { FaRegCircleUser as UserIcon } from "react-icons/fa6";
import { LuUser as CurrentUserIcon } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useUserLogout } from "../hooks/useUserLogout";

export const Header = () => {
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const logout = useUserLogout();
  const { _id, username } = useSelector((state) => state.user.value);

  return (
    <header className=" sticky top-0 w-full py-6 bg-white z-10">
      <div className=" flex items-center justify-between w-[95%] max-w-[1400px] mx-auto">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
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
    </header>
  );
};
