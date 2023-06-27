import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from './../Utils/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <div className="flex relative">
        <div className="hidden lg:block lg:w-[30%] bg-[#e8eef1] h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[70%]  bg-white">
          <Navbar/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
