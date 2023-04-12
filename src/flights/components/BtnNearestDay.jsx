import React from 'react';
import { getDayMon } from '../dateUtils';

import '../../styles/datePicker.scss';

const BtnNearestDay = ({ text, date, onClick, dateValue }) => (
  <button
    // className={date === getDayMon(dateValue) ? 'nearest-day--active' : undefined}
    className={date === getDayMon(dateValue) && 'nearest-day--active'} //works but give err --> react-dom.development.js:86 Warning: Received `false` for a non-boolean attribute `className`.
    onClick={onClick}
  >
    {date}
    <span>{text}</span>
  </button>
);
export default BtnNearestDay;
