import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SuccessRegister from "./containers/SuccessRegister";
import Members from "./containers/Members";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/success" element={<SuccessRegister />}></Route>
      </Routes>
    </div>
  );
};

export default App;
