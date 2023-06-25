import React from "react";
import logo from '../../Assets/logo.png';

const Sidebar = () => {
  return (
    <div>
      <div className="px-4 py-10 grid grid-cols-1 justify-items-center h-screen">
        <div className="pt-4">
          <img src={logo} alt="" className="rounded-full" />
        </div>
        <p className="px-4 text-center">Navigating your flight compensation journey. Our expert analysis matches airline policies with your details, delivering instant eligibility verdicts. Whether eligible or not, we provide clear explanations and personalized claim letters, empowering you to take control.</p>
        <div className="pt-6">
          <div>
            <label htmlFor="">
              <h2 className="text-lg text-center">Subscribe for newsletter</h2>
            </label>
          </div>
          <div>
            <input type="text" className="border w-full max-w-xs h-10 rounded-lg px-6" placeholder="Enter Your Email" />
          </div>
        </div>
        <p className="text-center text-sm px-6">
          Copyright ©2023 All rights reserved | This website is made with by Machine Minds Team.
        </p>
      </div>

    </div>

  );
};

export default Sidebar;
