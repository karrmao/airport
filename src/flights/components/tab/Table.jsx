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

  console.log('DV&&1', dateValue);

  useEffect(() => {
    getFlightsData(date);
  }, [date]);

  const currentFlight =
    location.pathname === '/departures' ? flightsData.departure : flightsData.arrival;

  if (!currentFlight) {
    return null;
  }

  const nameArrow =
    location.pathname === 'departures' ? 'airportToID.city_en' : 'airportFromID.city_en';

  const filtredFlight =
    searchInputValue === null
      ? currentFlight
      : currentFlight.filter(fly => fly[nameArrow].includes(searchInputValue));

  console.log('data', filtredFlight);

  console.log(
    'filtred?',
    filtredFlight.filter(el =>
      console.log('DV&&2', moment(el.actual).format('YYYY-MM-DD') === dateValue),
    ),
  );

  return flightsData.departure.length === 0 ? (
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
            <th>Flight</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {filtredFlight.map(flight => (
            // console.log('flight XXXX', flight);
            <TableItem key={flight.ID} flightData={flight} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const arr = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Mary' },
  { id: 4, name: 'Ann' },
  { id: 5, name: 'Bob' },
];

const bobsArray = arr.filter(obj => obj.name === 'Bob');
console.log(bobsArray);
export default Table;
