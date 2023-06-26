import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <DatePicker
      className="ml-1 w-full border-none outline-none"
      selected={selectedDate}
      onChange={handleDateChange}
      placeholderText="select a date"
    />
  );
};

export default CustomDatePicker;
