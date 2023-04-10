import React from 'react';
import moment from 'moment';
import '../date_picker/datePicker.scss';

const BtnNearestDay = ({ text, date, onClick, dateValue }) => (
  <button
    className={date === moment(dateValue).format('DD/MM') && 'nearest-day--active'}
    onClick={onClick}
  >
    {date}
    <span>{text}</span>
  </button>
);
export default BtnNearestDay;

//
