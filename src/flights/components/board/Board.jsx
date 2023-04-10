import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as flightsActions from '../../flights.actions';
import flightsDataSelector from '../../flights.selectors';
import { getCurrentDate, calendarFormat, curentDate } from '../../dateUtils';

import DatePicker from '../date_picker/DatePicker';

import SearchFlightForm from '../searchFlightsForm/SearchFlightForm';

import Table from '../tab/Table';
import TypeSwitchers from '../type_switchers/TypeSwitchers';

import './board.scss';

const Board = ({ flightsData, getFlightsData }) => {
  const [dateValue, setDateValue] = useState(getCurrentDate(curentDate, calendarFormat));

  useEffect(() => {
    getFlightsData(dateValue);
  }, [dateValue]);

  return (
    <main className="board">
      <SearchFlightForm />
      <TypeSwitchers />
      <DatePicker dateValue={dateValue} setDateValue={setDateValue} />
      <Table flightsData={flightsData} dateValue={dateValue} />
    </main>
  );
};

const mapState = state => ({ flightsData: flightsDataSelector(state) });

const mapDispatch = {
  getFlightsData: flightsActions.getFlightsData,
};
export default connect(mapState, mapDispatch)(Board);
