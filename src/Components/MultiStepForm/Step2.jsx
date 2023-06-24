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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
