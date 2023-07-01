import React from "react";

const Step2 = ({ setFormData, formData }) => {
  return (
    <div className="transition-opacity  transform duration-500">
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-gray-700">
          Do You Have any Recipt Details
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 my-5">
          <div>
            <div className="border ">
              <input
                type="radio"
                className="w-4 h-4"
                id="noReceipt"
                name="receiptDetails"
                value="no"
                checked={formData?.isRecipts === "no"}
                required
              />
              <label htmlFor="noReceipt" className="ml-2 mr-4">
                No
              </label>
              <input
                type="radio"
                className="w-4 h-4"
                id="yesReceipt"
                name="receiptDetails"
                value="yes"
                checked={formData?.isRecipts === "yes"}
                required
              />
              <label htmlFor="yesReceipt" className="ml-2 mr-4">
                Yes
              </label>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3 my-5">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Meal Receipt Amount
            </label>
            <div
              className={`pl-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10`}
            >
              <input
                type="number"
                readOnly={!formData?.airLineName}
                className={`ml-1 w-full border-none outline-none ${!formData?.airLineName && "cursor-not-allowed"
                  }`}
                value={formData?.mealAmount}
                onChange={(e) =>
                  setFormData({ ...formData, mealAmount: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Hotel Receipt Amount
            </label>
            <div
              className={`pl-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10`}
            >
              <input
                type="number"
                readOnly={!formData?.airLineName}
                className={`ml-1 w-full border-none outline-none ${!formData?.airLineName && "cursor-not-allowed"
                  }`}
                value={formData?.accommodationAmount}
                onChange={(e) =>
                  setFormData({ ...formData, accommodationAmount: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Transportation Receipt Amount
            </label>
            <div
              className={`pl-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10`}
            >
              <input
                type="number"
                readOnly={!formData?.airLineName}
                className={`ml-1 w-full border-none outline-none ${!formData?.airLineName && "cursor-not-allowed"
                  }`}
                value={formData?.transportAmount}
                onChange={(e) =>
                  setFormData({ ...formData, transportAmount: e.target.value })
                }
                required
              />
            </div>
          </div>
        </div> */}

      </div>
      {/* <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-gray-700">
          Communication With Airlines
        </h4>
        <div className="grid grid-cols-1 items-center gap-3 my-5 ">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Email Communication Summary
            </label>
            <textarea className={`w-full p-3 bg-white mx-auto border border-gray-400 rounded h-28 ${!formData?.airLineName && "cursor-not-allowed"}`} rows={10} cols={30}
              readOnly={!formData?.airLineName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  emailSummary: e.target.value,
                })
              }></textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-3 my-5 ">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Message Exchange Summary
            </label>
            <textarea className={`w-full p-3 bg-white mx-auto border border-gray-400 rounded h-28 ${!formData?.airLineName && "cursor-not-allowed"}`} rows={10} cols={30}
              readOnly={!formData?.airLineName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  messageSumamry: e.target.value,
                })
              }></textarea>
          </div>
        </div>

      </div> */}
    </div>
  );
};

export default Step2;
