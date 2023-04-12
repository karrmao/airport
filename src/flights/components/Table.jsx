import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TableItem from './TableItem';
import { getFlightsData } from '../flights.actions';
import { getFullYear } from '../dateUtils';
import '../../styles/table.scss';

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

  const cityName =
    location.pathname === '/departures' ? 'airportToID.city_en' : 'airportFromID.city_en';

  const dataInput =
    searchInputValue === null
      ? currentFlight
      : currentFlight.filter(
          fly =>
            fly[cityName].toLowerCase().includes(searchInputValue.toLowerCase()) ||
            fly.codeShareData[0].codeShare.toLowerCase().includes(searchInputValue.toLowerCase()),
        );

  const actualFlightData = dataInput.filter(el => getFullYear(el.actual) === dateValue);

  return currentFlight.length === 0 || actualFlightData.length === 0 ? (
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
          {actualFlightData.map(flight => (
            <TableItem key={flight.ID} flightData={flight} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
