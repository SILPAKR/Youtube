import React from "react";
import { useDispatch } from "react-redux";
import { toggleMEnu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMEnu());
  };
  return (
    <div className="grid grid-flow-col m-2 p-4 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180"
          alt="logo"
          className="h-8 mx-2"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="border border-gray-400 w-1/2 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 rounded-r-full py-2 px-5 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://clipground.com/images/user-icon-vector-png-6.png"
          className="h-8"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
