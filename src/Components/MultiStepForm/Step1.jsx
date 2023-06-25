import { format } from "date-fns";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  MdFlight,
  MdOutlineCardTravel,
  MdOutlineDateRange,
} from "react-icons/md";
import { RxIdCard } from "react-icons/rx";

const Step1 = ({ setFormData, formData }) => {
  const [disruptionDate, setDisruptionDate] = useState(null);
  const [boardingPassDate, setSetBoardingPassDate] = useState(null);
  //   const [selectReason, setSelectReson] = useState("");
  const [airData, setAirData] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [seletedAirlineCode, setSeletedAirlineCode] = useState('');

  useEffect(() => {
    fetch('airlines.json')
      .then(res => res.json())
      .then(data => {
        setAirData(data);
      })
  }, [])

  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearchTerm(value);
    setFormData({ ...formData, airLineName: e.target.value });
    if (value === "") {
      setFilteredOptions([]);
      setSeletedAirlineCode("");
    }
    else {
      const filtered = airData.filter(option =>
        option.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);

    }


  }

  const handleSelectOption = (data) => {
    console.log("option click: ", data.name);
    setFormData({ ...formData, airLineName: data });
    setFormData({ ...formData, airLineId: data.id });
    setSeletedAirlineCode(data.id);
    setSearchTerm(data.name);
    setFilteredOptions([]);
  };


  const handleDisruptionDate = (date) => {
    setDisruptionDate(date);
    setFormData({
      ...formData,
      dateOfDisruption: format(date, "PP"),
    });
  };
  const handleBoardingPassDate = (date) => {
    setSetBoardingPassDate(date);
    setFormData({
      ...formData,
      boardingPassDate: format(date, "PP"),
    });
  };




  return (
    <div className="transition-opacity transform duration-500">
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
            <div className="p-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10">
              <MdFlight className="text-gray-400 text-lg" />
              <input
                type="text"
                className="ml-1 w-full border-none outline-none"
                placeholder="e.g Delta Airliens"
                value={searchTerm}
                onChange={handleSearch}
                required
              />
            </div>
            {/* Filtered Data */}
            {
              filteredOptions.length > 0 && (
                <div className="absolute w-72 bg-white border-none outline-none">
                  {
                    filteredOptions.map((data, index) => (
                      <div key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSelectOption(data)}
                      >
                        {data.name}
                      </div>
                    ))
                  }
                </div>
              )
            }
          </div>

          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Flight Number
            </label>
            <div
              className={`pl-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10`}
            >
              <RxIdCard className="text-gray-400 text-lg" />
              {/* selected airline's code */}
              {seletedAirlineCode !== "" && <span name="airLineId" className="ml-2 px-2 text-gray-400 border" >{seletedAirlineCode}</span>}
              <input
                type="text"
                readOnly={!formData?.airLineName}
                className={`ml-1 w-full border-none outline-none ${!formData?.airLineName && "cursor-not-allowed"
                  }`}
                placeholder={`${seletedAirlineCode !== "" ? "1234..." : "e.g DA-123"}`}
                value={formData?.flightNumber}
                onChange={(e) =>
                  setFormData({ ...formData, flightNumber: e.target.value })
                }
                required
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
                readOnly={!formData?.airLineName}
                disabled={!formData?.airLineName}
                className={`ml-1 w-full border-none outline-none ${!formData?.flightNumber && "cursor-not-allowed"
                  }`}
                selected={disruptionDate}
                onChange={handleDisruptionDate}
                placeholderText="MM/DD/YYYY"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* boarding pass details field */}
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-gray-700">
          Disruption Reason and Boarding Pass Details
        </h4>
        {/* reason for disruption*/}
        <div className="grid grid-cols-1 items-center gap-3 my-5 ">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Reason for Disruption
            </label>
            <div
              className="w-full p-3 bg-white mx-auto border border-gray-400 rounded flex justify-end items-center h-10"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  reasonForDisruption: e.target.value,
                })
              }
            >
              <select className="w-full outline-none border-gray-400" required>
                <option defaultValue="nothing" disabled selected>
                  Select a Disruption Reason
                </option>
                <option value="US" defaultValue="canada">
                  United States
                </option>
                <option value="delay">Delay</option>
                <option value="cancellation">Cancellation</option>
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
              Boarding Pass Number
            </label>
            <div className="p-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10">
              <MdOutlineCardTravel className="text-gray-400 text-lg" />
              {seletedAirlineCode !== "" && <span name="airLineId" className="ml-2 px-2 text-gray-400 border" >{seletedAirlineCode}</span>}
              <input
                type="number"
                className="ml-1 w-full border-none outline-none"
                placeholder={`${seletedAirlineCode !== "" ? "1234..." : "e.g DA-123"}`}
                value={formData?.boardingPassNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    boardingPassNumber: e.target.value,
                  })
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
              Boarding Pass Date
            </label>
            <div className="bg-white flex items-center p-2 border border-gray-400 rounded">
              <MdOutlineDateRange className="text-gray-400 text-lg" />
              <DatePicker
                className="ml-1 w-full border-none outline-none"
                selected={boardingPassDate}
                onChange={handleBoardingPassDate}
                placeholderText="MM/DD/YYYY"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;