import React from "react";
import { MdFlight } from "react-icons/md";
import { RxIdCard } from "react-icons/rx";

const Step1 = ({ setFormData, formData }) => {
  return (
    <div>
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-gray-700">
          Flight Details
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 my-5">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Flight Name
            </label>
            <div className="p-2 border w-full bg-white  mx-auto border-gray-400 rounded flex justify-end items-center h-10">
              <MdFlight className="text-gray-400 text-lg" />
              <input
                type="text"
                className="ml-1 w-full border-none outline-none"
                placeholder="e.g Delta Airliens"
                value={formData?.airLineName}
                onChange={(e) =>
                  setFormData({ ...formData, airLineName: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Flight Number
            </label>
            <div className="p-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10">
              <RxIdCard className="text-gray-400 text-lg" />
              <input
                type="text"
                className="ml-1 w-full border-none outline-none"
                placeholder="e.g DA-123"
                value={formData?.flightNumber}
                onChange={(e) =>
                  setFormData({ ...formData, flightNumber: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-gray-700">
          Flight Details
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 my-5">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Flight Name
            </label>
            <div className="p-2 border w-full bg-white  mx-auto border-gray-400 rounded flex justify-end items-center h-10">
              <MdFlight className="text-gray-400 text-lg" />
              <input
                type="text"
                className="ml-1 w-full border-none outline-none"
                placeholder="e.g Delta Airliens"
                value={formData?.airLineName}
                onChange={(e) =>
                  setFormData({ ...formData, airLineName: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Flight Number
            </label>
            <div className="p-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10">
              <RxIdCard className="text-gray-400 text-lg" />
              <input
                type="text"
                className="ml-1 w-full border-none outline-none"
                placeholder="e.g DA-123"
                value={formData?.flightNumber}
                onChange={(e) =>
                  setFormData({ ...formData, flightNumber: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-gray-700">
          Flight Details
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 my-5">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Flight Name
            </label>
            <div className="p-2 border w-full bg-white  mx-auto border-gray-400 rounded flex justify-end items-center h-10">
              <MdFlight className="text-gray-400 text-lg" />
              <input
                type="text"
                className="ml-1 w-full border-none outline-none"
                placeholder="e.g Delta Airliens"
                value={formData?.airLineName}
                onChange={(e) =>
                  setFormData({ ...formData, airLineName: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Flight Number
            </label>
            <div className="p-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10">
              <RxIdCard className="text-gray-400 text-lg" />
              <input
                type="text"
                className="ml-1 w-full border-none outline-none"
                placeholder="e.g DA-123"
                value={formData?.flightNumber}
                onChange={(e) =>
                  setFormData({ ...formData, flightNumber: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
