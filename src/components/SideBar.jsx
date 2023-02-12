import React from "react";
import {
  IoMdHome,
  IoMdLogOut,
  IoMdPeople,
  IoIosList,
  IoIosMailUnread,
} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-400 h-full flex flex-col items-center py-8 ">
      <Link
        to="/"
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
      >
        <IoMdHome size={25} className="mr-8" />
        <div className="text-md">Trang chủ</div>
      </Link>
      <Link
        to="/member"
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
      >
        <IoMdPeople size={25} className="mr-8" />
        <div className="text-md">Thành viên</div>
      </Link>
      <Link
        to="/inbox"
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
      >
        <IoIosMailUnread size={25} className="mr-8" />
        <div className="text-md">Tin nhắn</div>
      </Link>
      <Link
        to="/register-form"
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
      >
        <IoIosList size={25} className="mr-8" />
        <div className="text-md">Đăng kí</div>
      </Link>
      <div
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
        onClick={() => {
          navigate("/login");
          localStorage.clear();
        }}
      >
        <IoMdLogOut size={25} className="mr-8" />
        <div className="text-md">Đăng xuất</div>
      </div>
    </div>
  );
};

export default SideBar;
