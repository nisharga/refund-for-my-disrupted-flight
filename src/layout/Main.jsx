import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar"; 
import Navbar from './../Utils/Navbar/Navbar';
const Main = () => {
  return (
    <>
      <div className="flex relative">
        <div className="hidden lg:block lg:w-[22%] bg-gray-800 h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[78%] bg-white overflow-y-scroll">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
