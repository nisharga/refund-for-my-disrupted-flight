import React from "react";

const Step2 = ({ setFormData, formData }) => {
  return (
    <div className="transition-opacity  transform duration-500">
      <div className="mb-4">
        <label
          className="block font-medium mb-2 text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full border border-gray-400 p-2"
          value={formData?.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Step2;
