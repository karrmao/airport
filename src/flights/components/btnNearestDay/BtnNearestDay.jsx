import React from 'react';

const BtnNearestDay = ({ text, date, onClick }) => (
  <button className="date-picker__nearest-day" onClick={onClick}>
    {date}
    <span>{text}</span>
  </button>
);
export default BtnNearestDay;
