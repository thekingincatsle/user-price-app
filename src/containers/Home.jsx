import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import { Routes, Route } from "react-router-dom";
import Members from "./Members";
import Landing from "./Landing";
import Inbox from "./Inbox";
import { Link } from "react-router-dom";

const Home = () => {
  const family = JSON.parse(localStorage.getItem("family"));
  if (family) {
    return (
      <div className="h-screen overflow-hidden">
        <NavBar />
        <div className="flex h-full">
          <div className="w-1/6">
            <SideBar />
          </div>
          <div className="flex flex-col items-center w-5/6 overflow-scroll">
            <Routes>
              <Route path="/register-form" element={<Form />}></Route>
              <Route path="/*" element={<Landing />}></Route>
              <Route path="/member" element={<Members />}></Route>
              <Route path="/inbox" element={<Inbox />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="w-full h-full bg-cover flex flex-col gap-5 justify-center items-center text-3xl mt-10">
        <div>Vui lòng đăng nhập để tiếp tục</div>
        <Link to="/login">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Quay về trang đăng nhập
          </button>
        </Link>
      </div>
    );
};

export default Home;
