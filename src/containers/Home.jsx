import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import { Routes, Route } from "react-router-dom";
import Members from "./Members";
import Landing from "./Landing";

const Home = () => {
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
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
