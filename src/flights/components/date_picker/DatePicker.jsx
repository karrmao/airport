import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';
import BtnNearestDay from '../btnNearestDay/BtnNearestDay';
import {
  curentDate,
  privDate,
  nextDate,
  calendarFormat,
  dayMothFormat,
  getCurrentDate,
} from '../../dateUtils';
import './datePicker.scss';

const DatePicker = ({ dateValue, setDateValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set('date', dateValue);
    setSearchParams(searchParams);
  }, [dateValue]);

  console.log(dateValue);
  return (
    <div className="date-picker">
      <input
        className="date-picker__input"
        type="date"
        value={dateValue}
        onChange={e => setDateValue(e.target.value)}
      />

      <BtnNearestDay
        onClick={() => setDateValue(getCurrentDate(privDate, calendarFormat))}
        date={getCurrentDate(privDate, dayMothFormat)}
        text="YESTERDAY"
      />
      <BtnNearestDay
        onClick={() => setDateValue(getCurrentDate(curentDate, calendarFormat))}
        date={getCurrentDate(curentDate, dayMothFormat)}
        text="TODAY"
      />
      <BtnNearestDay
        onClick={() => setDateValue(getCurrentDate(nextDate, calendarFormat))}
        date={getCurrentDate(nextDate, dayMothFormat)}
        text="TOMORROW"
      />
    </div>
  );
};

export default DatePicker;
