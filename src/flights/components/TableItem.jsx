import React from 'react';
// import { getHourMinutes } from '../dateUtils';
import { getHourMin } from '../dateUtils';
import '../../styles/tableItem.scss';

const TableItem = ({ flightData }) => {
  const terminal = flightData.term;

  const localTime = flightData.timeDepShedule
    ? // ? getHourMinutes(flightData.timeDepShedule)
      // : getHourMinutes(flightData.timeArrShedule);
      getHourMin(flightData.timeDepShedule)
    : getHourMin(flightData.timeArrShedule);

  const destination = flightData['airportToID.city_en']
    ? flightData['airportToID.city_en']
    : flightData['airportFromID.city_en'];

  // const status = getHourMinutes(flightData.timeTakeofFact);
  const status = getHourMin(flightData.timeTakeofFact);

  const airlineLogo = flightData.airline.en.logoSmallName;
  const airlineName = flightData.airline.en.name;
  const planeNumber = flightData.codeShareData[0].codeShare;

  return (
    <tr className="table__body-row">
      <td>
        <span className={terminal === 'A' ? 'terminal' : 'terminal terminal--pomaranch'}>
          {terminal}
        </span>
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
