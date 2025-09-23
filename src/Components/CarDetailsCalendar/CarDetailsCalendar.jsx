


import { useState } from "react";

const statusColors = {
  available: "bg-green-100 text-gray-800",
  partial: "bg-yellow-400 text-white",
  notAvailable: "bg-red-500 text-white",
  empty: "bg-gray-200 text-gray-400",
};

// بيانات تجريبية (تقدر تغيرها أو تجيبها من API)
const reservations = {
  "2025-09": { 7: "available", 9: "notAvailable", 15: "partial" },
  "2025-10": { 1: "notAvailable", 6: "available", 12: "notAvailable" },
  "2025-11": { 3: "partial", 8: "available", 20: "notAvailable" },
  "2026-01": { 5: "available", 18: "notAvailable" },
  "2026-05": { 10: "partial", 15: "notAvailable" },
};

function getMonthDays(year, month) {
  const date = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const startDay = date.getDay(); // الأحد = 0
  const days = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  return { days, date, year, month };
}

function MonthCalendar({ year, month, reservations }) {
  const { days, date } = getMonthDays(year, month);
  const key = `${year}-${month.toString().padStart(2, "0")}`;

  return (
    <div className="border rounded-lg p-4 w-full">
      <p className="font-medium text-gray-700 mb-2 text-center">
        {date.toLocaleString("default", { month: "long" })} {year}
      </p>
      <div className="grid grid-cols-7 text-center text-sm font-semibold mb-2">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map((d, i) => {
          if (!d) {
            return (
              <span
                key={i}
                className="p-2 rounded border bg-gray-100 text-gray-300"
              >
                -
              </span>
            );
          }
          const status = reservations[key]?.[d] || "available";
          return (
            <span
              key={i}
              className={`p-2 rounded border cursor-default ${
                statusColors[status]
              }`}
            >
              {d}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function CarDetailsCalendar() {
  const [month, setMonth] = useState("2025-09");

  const monthsList = [];
  for (let y = 2025; y <= 2026; y++) {
    for (let m = 1; m <= 12; m++) {
      if (y === 2025 && m < 9) continue; // يبدأ من سبتمبر 2025
      if (y === 2026 && m > 5) break; // ينتهي عند مايو 2026
      const label = new Date(y, m - 1).toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      monthsList.push({ value: `${y}-${m.toString().padStart(2, "0")}`, label });
    }
  }

  const [year, m] = month.split("-");
  const nextMonth = new Date(Number(year), Number(m));
  const nextValue = `${nextMonth.getFullYear()}-${(nextMonth.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="max-w-6xl  mt-10">
      {/* الدروب داون + legend */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          {monthsList.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>

        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-green-200"></span>
            Available
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            Partially Reserved
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            Not Available
          </div>
        </div>
      </div>

      {/* عرض الشهر الحالي + الشهر اللي بعده */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MonthCalendar
          year={Number(year)}
          month={Number(m)}
          reservations={reservations}
        />
        <MonthCalendar
          year={Number(nextMonth.getFullYear())}
          month={Number(nextMonth.getMonth() + 1)}
          reservations={reservations}
        />
      </div>
    </div>
  );
}
