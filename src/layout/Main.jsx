import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../utls/Navbar/Navbar";

const Main = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block lg:w-1/4 bg-gray-200 h-screen">
        <Sidebar />
      </div>
      <div className="w-full lg:w-3/4  bg-white">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
