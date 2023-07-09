import { format } from "date-fns";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdFlight, MdOutlineDateRange } from "react-icons/md";

const Step1 = ({ setFormData, formData }) => {
  const [airData, setAirData] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [seletedAirlineCode, setSeletedAirlineCode] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(0);

  useEffect(() => {
    fetch("airlines.json")
      .then((res) => res.json())
      .then((data) => {
        setAirData(data);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, airLineName: value });
    if (value === "") {
      setFilteredOptions([]);
      setSeletedAirlineCode("");
    } else {
      const filtered = airData.filter((option) =>
        option.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  const handleSelectOption = (data) => {
    setFormData({ ...formData, airLineName: data.name, airLineId: data.id });
    setSeletedAirlineCode(data.id);
    setFilteredOptions([]);
  };

  const handleDisruptionDate = (date) => {
    setFormData({
      ...formData,
      dateOfDisruption: format(date, "PP"),
    });
  };
  const handleBoardingPassDate = (date) => {
    setFormData({
      ...formData,
      boardingPassDate: format(date, "PP"),
    });
  };
  const handleInputFocus = (num) => {
    setIsInputFocused(num);
  };

  const handleInputBlur = () => {
    setIsInputFocused(0);
  };
  console.log(isInputFocused);

  return (
    <div className="transition-opacity transform duration-500">
      {/* airline details */}
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-blue-950">
          Flight Details
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 my-5">
          <div>
            <label
              className="block font-medium mb-2 text-blue-950"
              htmlFor="name"
            >
              Airline Name <span className="text-red-500">*</span>
            </label>
            <div
              className={`p-2 border w-full bg-white mx-auto ${
                isInputFocused === 1
                  ? "border-blue-500"
                  : formData?.airLineName
                  ? "border-blue-900 "
                  : "border-gray-400"
              } rounded flex justify-end items-center h-10 `}
            >
              <MdFlight
                className={`text-xl ${
                  isInputFocused === 1
                    ? "text-blue-500"
                    : formData?.airLineName
                    ? "text-blue-900"
                    : "text-gray-400"
                }`}
              />
              <input
                type="text"
                className={`ml-1 w-full border-none outline-none ${
                  isInputFocused === 1
                    ? "text-blue-500"
                    : formData?.airLineName && "text-blue-900"
                }`}
                placeholder="e.g Delta Airlines"
                value={formData.airLineName}
                onChange={handleSearch}
                onFocus={() => handleInputFocus(1)}
                onBlur={() => handleInputBlur(0)}
                required
              />
            </div>
            {/* Filtered Data */}
            {filteredOptions.length > 0 && (
              <div className="absolute w-72 z-10 bg-white border-none outline-none">
                {filteredOptions.map((data, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectOption(data)}
                  >
                    {data.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label
              className="block font-medium mb-2 text-blue-950"
              htmlFor="name"
            >
              Flight Number <span className="text-red-500">*</span>
            </label>
            <div
              className={` border w-full bg-white mx-auto ${
                isInputFocused === 2
                  ? "border-blue-500"
                  : formData?.flightNumber
                  ? "border-blue-900 "
                  : "border-gray-400"
              }  rounded flex justify-end items-center h-10 `}
            >
              {/* selected airline's code */}
              <span
                name="airLineId"
                className={`inline-block h-full  px-2 ${
                  formData?.airLineId
                    ? "text-blue-950 font-normal"
                    : "text-gray-400"
                } border-r p-2 min-w-min`}
              >
                {formData.airLineId ? formData.airLineId : "DL"}
              </span>

              <input
                type="number"
                readOnly={!formData?.airLineName}
                disabled={!formData?.airLineName}
                className={`ml-1 w-full border-none outline-none ${
                  isInputFocused === 2
                    ? "text-blue-500"
                    : formData?.flightNumber && "text-blue-900"
                } ${!formData?.airLineName && "cursor-not-allowed"}`}
                placeholder="1234"
                value={formData?.flightNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    flightNumber: Number(e.target.value),
                  })
                }
                onFocus={() => handleInputFocus(2)}
                onBlur={() => handleInputBlur(0)}
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block font-medium mb-2 text-blue-950"
              htmlFor="name"
            >
              Date of Disruption <span className="text-red-500">*</span>
            </label>
            <div
              className={`bg-white  flex items-center p-2 border ${
                isInputFocused === 3
                  ? "border-blue-500"
                  : formData?.dateOfDisruption
                  ? "border-blue-900 "
                  : "border-gray-400"
              }  rounded`}
            >
              <MdOutlineDateRange
                className={`text-xl ${
                  isInputFocused === 3
                    ? "text-blue-500"
                    : formData?.dateOfDisruption
                    ? "text-blue-900"
                    : "text-gray-400"
                }`}
              />
              <DatePicker
                readOnly={!formData?.flightNumber}
                disabled={!formData?.flightNumber}
                className={`ml-1 w-60 lg:w-80 border-none outline-none ${
                  isInputFocused === 3
                    ? "text-blue-500"
                    : formData?.flightNumber && "text-blue-900"
                }  ${!formData?.flightNumber && "cursor-not-allowed"} `}
                value={formData?.dateOfDisruption}
                onChange={handleDisruptionDate}
                onFocus={() => handleInputFocus(3)}
                onBlur={() => handleInputBlur(0)}
                placeholderText="MM/DD/YYYY"
                required
              />
            </div>
          </div>

          <div>
            <label
              className="block font-medium mb-2 text-blue-950"
              htmlFor="name"
            >
              Reason for Disruption <span className="text-red-500">*</span>
            </label>
            <div
              className={`w-full bg-white mx-auto border  rounded flex justify-end items-center h-10
            ${
              isInputFocused === 4
                ? "border-blue-500"
                : formData?.reasonForDisruption
                ? "border-blue-900 "
                : "border-gray-400"
            }
            `}
            >
              <select
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    reasonForDisruption: e.target.value,
                  })
                }
                onFocus={() => handleInputFocus(4)}
                onBlur={() => handleInputBlur(0)}
                disabled={!formData?.dateOfDisruption}
                defaultValue={
                  formData?.reasonForDisruption === ""
                    ? ""
                    : formData?.reasonForDisruption
                }
                className={`w-full px-3 outline-none border-gray-400 ${
                  !formData?.dateOfDisruption && "cursor-not-allowed"
                } ${
                  isInputFocused === 4
                    ? "text-blue-500"
                    : formData?.flightNumber && "text-blue-900"
                } 
`}
                required
              >
                <option defaultChecked>Select a Disruption Reason</option>
                <option value="Delay">Delay</option>
                <option value="Cancellation">Cancellation</option>
                <option value="Overbooking">Overbooking</option>
                <option value="Overbooking">Bad Weather</option>
                <option value="Overbooking">Technical Problem</option>
                <option value="Overbooking">Don't Remember</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* boarding pass details field */}
      <div className="mt-10 bg-[#e8eef1] rounded-lg p-7">
        <h4 className="font-medium mb-2 text-lg text-blue-950">
          Boarding Pass Details
        </h4>
        {/* reason for disruption  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 my-5">
          <div>
            <label
              className="block font-medium mb-2 text-blue-950"
              htmlFor="name"
            >
              Boarding pass number <span className="text-red-500">*</span>
            </label>
            <div
              className={` border w-full bg-white mx-auto ${
                isInputFocused === 5
                  ? "border-blue-500"
                  : formData?.boardingPassNumber
                  ? "border-blue-900 "
                  : "border-gray-400"
              }  rounded flex justify-end items-center h-10 `}
            >
              <span
                name="airLineId"
                className={`inline-block h-full  px-2 ${
                  formData?.airLineId
                    ? "text-blue-950 font-normal"
                    : "text-gray-400"
                } border-r p-2 min-w-min`}
              >
                {formData.airLineId ? formData.airLineId : "DL"}
              </span>
              <input
                type="number"
                readOnly={!formData?.reasonForDisruption}
                disabled={!formData?.reasonForDisruption}
                className={`ml-1 w-full border-none outline-none px-2 ${
                  !formData?.reasonForDisruption && "cursor-not-allowed"
                } ${
                  isInputFocused === 5
                    ? "text-blue-500"
                    : formData?.boardingPassNumber && "text-blue-900"
                }`}
                placeholder="1234"
                value={formData?.boardingPassNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    boardingPassNumber: e.target.value,
                  })
                }
                onFocus={() => handleInputFocus(5)}
                onBlur={() => handleInputBlur(0)}
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block font-medium mb-2 text-blue-950"
              htmlFor="name"
            >
              Boarding pass date <span className="text-red-500">*</span>
            </label>
            <div
              className={`bg-white  flex items-center p-2 border ${
                isInputFocused === 6
                  ? "border-blue-500"
                  : formData?.boardingPassDate
                  ? "border-blue-900 "
                  : "border-gray-400"
              }  rounded`}
            >
              <MdOutlineDateRange
                className={`text-xl ${
                  isInputFocused === 6
                    ? "text-blue-500"
                    : formData?.boardingPassDate
                    ? "text-blue-900"
                    : "text-gray-400"
                }`}
              />
              <DatePicker
                className={`ml-1 w-60 lg:w-80 border-none outline-none ${
                  !formData?.boardingPassNumber && "cursor-not-allowed"
                } ${
                  isInputFocused === 6
                    ? "text-blue-500"
                    : formData?.boardingPassDate
                    ? "text-blue-900"
                    : "text-gray-400"
                }`}
                readOnly={!formData?.boardingPassNumber}
                disabled={!formData?.boardingPassNumber}
                value={formData?.boardingPassDate}
                onChange={handleBoardingPassDate}
                onFocus={() => handleInputFocus(6)}
                onBlur={() => handleInputBlur(0)}
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
