import React from 'react';
import moment from 'moment';
import './tableItem.scss';

const TableItem = ({ flightData }) => {
  const terminal = flightData.term;

  const localTime = flightData.timeDepShedule
    ? moment(flightData.timeDepShedule).format('HH:mm')
    : moment(flightData.timeArrShedule).format('HH:mm');

  const destination = flightData['airportToID.city_en']
    ? flightData['airportToID.city_en']
    : flightData['airportFromID.city_en'];

  const status = moment(flightData.timeTakeofFact).format('HH:mm');
  const airlineLogo = flightData.airline.en.logoSmallName;
  const airlineName = flightData.airline.en.name;
  const planeNumber = flightData.codeShareData[0].codeShare;
  console.log(planeNumber);
  return (
    <tr className="table__body-row">
      <td>
        <span className="terminal">{terminal}</span>
      </td>
      <td>{localTime}</td>
      <td>{destination}</td>
      <td>Departed at {status}</td>
      <td>
        <div className="airline">
          <img className="airline__logo" alt="logoName" src={airlineLogo} />
          {airlineName}
        </div>
      </td>
      <td>{planeNumber}</td>
    </tr>
  );
};
export default TableItem;
