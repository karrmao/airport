/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import requestFlightsData from './flights.gateway';

export const SET_FLIGHTS_DATA = 'FLIGHTS/SET_FLIGHTS_DATA';

const setFlightsData = flightsData => {
  return {
    type: SET_FLIGHTS_DATA,
    payload: { flightsData },
  };
};

export const getFlightsData = date => {
  return function (dispatch) {
    requestFlightsData(date).then(flightsData => dispatch(setFlightsData(flightsData)));
  };
};
