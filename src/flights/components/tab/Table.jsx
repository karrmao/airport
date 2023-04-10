/* eslint-disable spaced-comment */
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TableItem from '../tableItem/TableItem';

import { getFlightsData } from '../../flights.actions';
import './table.scss';

import moment from 'moment';

const Table = ({ flightsData, dateValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const date = searchParams.get('date');
  const searchInputValue = searchParams.get('search');

  useEffect(() => {
    getFlightsData(date);
  }, [date]);

  const currentFlight =
    location.pathname === '/departures' ? flightsData.departure : flightsData.arrival;

  if (!currentFlight) {
    return null;
  }

  const nameArrow =
    location.pathname === '/departures' ? 'airportToID.city_en' : 'airportFromID.city_en';

  const dataInput =
    searchInputValue === null
      ? currentFlight
      : currentFlight.filter(
          fly =>
            fly[nameArrow].toLowerCase().includes(searchInputValue.toLowerCase()) ||
            fly.codeShareData[0].codeShare.toLowerCase().includes(searchInputValue.toLowerCase()),
        );

  const filtredWithActualData = dataInput.filter(
    el => moment(el.actual).format('YYYY-MM-DD') === dateValue,
  );

  return flightsData.departure.length === 0 || dataInput.length === 0 ? (
    <div className="nothing-found">No flights</div>
  ) : (
    <div className="flights-table">
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th> Flight</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {filtredWithActualData.map(flight => (
            <TableItem key={flight.ID} flightData={flight} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
