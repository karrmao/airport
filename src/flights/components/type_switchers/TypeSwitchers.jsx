/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './typeSwitchers.scss';

const TypeSwitchers = () => {
  let activeStyle = {
    zIndex: 2,
    color: '#fff',
    backgroundColor: '#1eb7ee',
  };

  // const x = location;
  console.log('location:', location);
  return (
    <div className="type-switchers">
      <NavLink
        // to={`/departures`}
        to={`/departures${location.search}`}
        // to={`/departures`}
        className="type-switchers__link"
        // activeclassname="active"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <i className="fas fa-plane-departure type-switchers__icon" />
        Departures
      </NavLink>
      <NavLink
        to={`/arrivals${location.search}`}
        // to={`/arrivals${location.date}`}
        className="type-switchers__link type-switchers__link_arrivals"
        // activeclassname="active"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <i className="fas fa-plane-arrival type-switchers__icon" />
        Arrivals
      </NavLink>
    </div>
  );
};

export default TypeSwitchers;
