/* eslint-disable default-param-last */
import { SET_FLIGHTS_DATA } from './flights.actions';

const initialValue = {
  //flightsData: [],
  flightsData: { body: {} },
};

const flightsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_FLIGHTS_DATA:
      return { ...state, flightsData: action.payload.flightsData };
    default:
      return state;
  }
};
export default flightsReducer;
