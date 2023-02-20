import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TableItem from '../tableItem/TableItem';

import { getFlightsData } from '../../flights.actions';
import './table.scss';

const Table = ({ flightsData }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const date = searchParams.get('date');
  const searchInputValue = searchParams.get('search');

  console.log(location.pathname);

  useEffect(() => {
    getFlightsData(date);
  }, [date]);

  const currentFlight =
    location.pathname === '/departures' ? flightsData.departure : flightsData.arrival;
  console.log('cF', currentFlight);

  if (!currentFlight) {
    return null;
  }

  const nameArrow =
    location.pathname === 'departures' ? 'airportToID.city_en' : 'airportFromID.city_en';

  // console.log('SI', searchInputValue);

  const filtredFlight =
    searchInputValue === null
      ? currentFlight
      : currentFlight.filter(fly =>
          fly[nameArrow].toLowerCase().includes(searchInputValue.toLowerCase()),
        );

  console.log(filtredFlight);
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
            <TableItem key={flight.id} flightData={flight} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
