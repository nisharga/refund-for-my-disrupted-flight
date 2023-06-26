import React, { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <input
        type="text"
        value={selectedDay ? selectedDay.toLocaleDateString() : ""}
        readOnly
      />
      <DayPicker selected={selectedDay} onDayClick={handleDayClick} />
    </div>
  );
};

export default DatePicker;
