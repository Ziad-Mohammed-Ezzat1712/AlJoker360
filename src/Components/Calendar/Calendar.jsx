import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // get year and month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // أول يوم في الشهر
  const firstDay = new Date(year, month, 1).getDay(); // Sunday = 0
  const adjustedFirstDay = (firstDay === 0 ? 7 : firstDay) - 1;

  // عدد الأيام في الشهر
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // array full of days
  const calendarDays = [];

  // أيام من الشهر السابق
  for (let i = adjustedFirstDay; i > 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i + 1,
      isCurrentMonth: false,
    });
  }

  // أيام الشهر الحالي
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      isCurrentMonth: true,
    });
  }

  // أيام من الشهر اللي بعده (لملئ الجدول 6 أسابيع = 42 يوم)
  while (calendarDays.length < 42) {
    calendarDays.push({
      day: calendarDays.length - (daysInMonth + adjustedFirstDay) + 1,
      isCurrentMonth: false,
    });
  }

  // تغيير الشهر
  const changeMonth = (offset) => {
    setCurrentDate(new Date(year, month + offset, 1));
  };

  return (
    <div className="w-[350px] p-4 bg-white rounded-xl shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <div className="flex gap-2">
          <button onClick={() => changeMonth(-1)}>
            <FiChevronLeft className="text-red-500" />
          </button>
          <button onClick={() => changeMonth(1)}>
            <FiChevronRight className="text-red-500" />
          </button>
        </div>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-red-500 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 text-center gap-y-2">
        {calendarDays.map((dayObj, index) => (
          <div
            key={index}
            className={`text-sm ${
              dayObj.isCurrentMonth
                ? "text-gray-900"
                : "text-gray-400"
            }`}
          >
            {dayObj.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
