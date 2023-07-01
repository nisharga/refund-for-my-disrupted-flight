import React, { useState } from "react";

const Step2 = ({ setFormData, formData }) => {
  const [isRecipt, setRecipt] = useState("no");
  const [receiptInputList, setReciptInputList] = useState([
    { reciptAmount: "" },
  ]);

  const handleAddRecipt = () => {
    setReciptInputList([
      ...receiptInputList,
      { reciptName: "", reciptAmount: "" },
    ]);
  };

  const handleRemoveRecipt = (i) => {
    const list = [...receiptInputList];
    list.splice(i, 1);
    setReciptInputList(list);
  };

  const handleReciptInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...receiptInputList];
    list[index][name] = value;
    setReciptInputList(list);
  };

  console.log(receiptInputList);

  return (
    <div className="transition-opacity  transform duration-500">
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-gray-700">
          Do You Have any Recipt Details
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 my-5">
          <button
            className="pl-2 border w-full bg-white mx-auto border-gray-400 rounded flex items-center h-10 cursor-pointer"
            onClick={() => setRecipt("no")}
          >
            <input
              type="radio"
              className="w-4 h-4"
              id="noReceipt"
              name="receiptDetails"
              value="no"
              checked={isRecipt === "no"}
              required
            />
            <label
              htmlFor="noReceipt"
              className="ml-2 mr-4 text-gray-400"
              readOnly
            >
              No, I don't
            </label>
          </button>
          <button
            className="pl-2 border w-full bg-white mx-auto border-gray-400 rounded flex items-center h-10 cursor-pointer"
            onClick={() => setRecipt("yes")}
          >
            <input
              type="radio"
              className="w-4 h-4"
              id="yesRecipt"
              name="receiptDetails"
              value="no"
              checked={isRecipt === "yes"}
              required
            />
            <label htmlFor="yesRecipt" className="ml-2 mr-4 text-gray-400">
              Yes, I hade receipts
            </label>
          </button>
        </div>
      </div>
      {isRecipt === "yes" && (
        <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
          <h4 className="font-medium mb-2 text-lg text-gray-700">
            Add your receipt details
          </h4>
          {receiptInputList?.map((x, i) => {
            return (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 my-5"
              >
                <div className="flex">
                  <select
                    className="bg-gray-200 pl-3 outline-none border rounded-l-md border-gray-400"
                    required
                    onChange={(e) => handleReciptInputChange(e, i)}
                  >
                    <option defaultValue="nothing" disabled selected>
                      Select a Recipt
                    </option>
                    <option value="meal">Meal</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="transportation">Transportation</option>
                    <option value="others">Others</option>
                  </select>
                  <div className="p-2 border w-full bg-white mx-auto border-gray-400 rounded-r-md flex justify-end items-center h-10">
                    <span className="text-gray-400 ">$</span>
                    <input
                      type="text"
                      name="reciptAmoutn"
                      className="ml-1 w-full border-none outline-none"
                      placeholder="120"
                      onChange={(e) => handleReciptInputChange(e, i)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {receiptInputList?.length !== 1 && (
                    <button
                      className="bg-blue-400 text-white px-3 py-2 rounded-md"
                      onClick={() => handleRemoveRecipt(i)}
                    >
                      X
                    </button>
                  )}
                  {receiptInputList?.length - 1 === i && (
                    <button
                      className="bg-blue-400 text-white px-3 py-2  rounded-md"
                      onClick={handleAddRecipt}
                    >
                      Add More
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
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
            <textarea
              className={`w-full p-3 bg-white mx-auto border border-gray-400 rounded h-28 ${
                !formData?.airLineName && "cursor-not-allowed"
              }`}
              rows={10}
              cols={30}
              readOnly={!formData?.airLineName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  emailSummary: e.target.value,
                })
              }
            ></textarea>
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
            <textarea
              className={`w-full p-3 bg-white mx-auto border border-gray-400 rounded h-28 ${
                !formData?.airLineName && "cursor-not-allowed"
              }`}
              rows={10}
              cols={30}
              readOnly={!formData?.airLineName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  messageSumamry: e.target.value,
                })
              }
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
