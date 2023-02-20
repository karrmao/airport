/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import flightsReducer from './flights/flights.reducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(flightsReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
