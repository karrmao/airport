import React from 'react';
import moment from 'moment';

const BtnNearestDay = ({ text, date, onClick, dateValue }) => (
  <button
    className={
      date === moment(dateValue).format('DD/MM')
        ? 'date-picker__nearest-day date-picker__nearest-day--active'
        : 'date-picker__nearest-day'
    }
    onClick={onClick}
  >
    {date}
    <span>{text}</span>
  </button>
);
export default BtnNearestDay;
