import React from 'react';
import { getFullYear } from '../dateUtils';

import '../../styles/datePicker.scss';

const BtnNearestDay = ({ text, date, onClick, dateValue }) => (
  <button className={date === getFullYear(dateValue) && 'nearest-day--active'} onClick={onClick}>
    {date}
    <span>{text}</span>
  </button>
);
export default BtnNearestDay;
