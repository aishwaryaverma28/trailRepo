import React, { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const prevMonth = () => {
    setDate(prevDate => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  const nextMonth = () => {
    setDate(prevDate => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = getFirstDayOfMonth(year, month);
    const totalDays = getDaysInMonth(year, month);
    const rows = [];
    let dayCounter = 1;

    // Render empty cells for previous month
    for (let i = 0; i < firstDay; i++) {
      rows.push(<td key={`empty-${i}`} className="empty-cell"></td>);
    }

    // Render cells for current month
    for (let i = 1; i <= totalDays; i++) {
      const isCurrentDate = i === date.getDate();
      const dayClass = isCurrentDate ? "current-date" : "";

      rows.push(
        <td key={`day-${i}`} className={dayClass}>
          {i}
        </td>
      );

      if ((i + firstDay) % 7 === 0) {
        rows.push(<tr key={`row-${i / 7}`}>{rows.splice(rows.length - 7)}</tr>);
      }
    }

    // Render remaining empty cells for last row
    if (rows.length > 0) {
      while (rows.length < 35) {
        rows.push(<td key={`empty-${rows.length}`} className="empty-cell"></td>);
      }
    }

    return rows;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{date.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
