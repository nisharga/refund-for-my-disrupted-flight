import { format } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdFlight, MdOutlineDateRange } from "react-icons/md";
import { RxIdCard } from "react-icons/rx";

const Step1 = ({ setFormData, formData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  //   const [selectReason, setSelectReson] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({
      ...formData,
      dateOfDisruption: format(date, "PP"),
    });
  };

  //   const handleSelectChange = (event) => {
  //     const selectedOption = event.target.value;
  //     setSelectReson(selectedOption);
  //     console.log("Selected value:", selectedOption);
  //   };

  return (
    <div className="transition-opacity  transform duration-500">
      {/* airline details */}
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
        <div className="grid grid-cols-1 items-center gap-3 my-5">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Date of Disruption
            </label>
            <div className="bg-white flex items-center p-2 border border-gray-400 rounded">
              <MdOutlineDateRange className="text-gray-400 text-lg" />
              <DatePicker
                className="ml-1 w-full border-none outline-none "
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="MM/DD/YYYY"
              />
            </div>
          </div>
        </div>
      </div>

      {/* baording pass details fild */}
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-gray-700">
          Disruption Reason and Boarding Pass Details
        </h4>
        <div className="grid grid-cols-1 items-center gap-3 my-5">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Date of Disruption
            </label>
            <div
              className="w-full p-3  bg-white  mx-auto border-gray-400 rounded flex justify-end items-center h-10 "
              onChange={(e) =>
                setFormData({
                  ...formData,
                  reasonForDisruption: e.target.value,
                })
              }
            >
              <select className="w-full outline-none">
                <option defaultValue="nothing" disabled selected>
                  Select a Disruption Reason
                </option>
                <option value="US" defaultValue="cananada">
                  United States
                </option>
                <option value="dealy">Dealy</option>
                <option value="cancelation">Cancelation</option>
                <option value="overbooking">Overbooking</option>
              </select>
            </div>
          </div>
        </div>
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
