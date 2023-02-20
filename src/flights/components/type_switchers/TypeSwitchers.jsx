import React from 'react';
import { NavLink } from 'react-router-dom';

import './typeSwitchers.scss';

const TypeSwitchers = () => (
  <div className="type-switchers">
    <NavLink
      to={`/departures`}
      // to={`/departures${location.date}`}
      // to={`/departures`}
      className="type-switchers__link"
      activeClassName="active"
    >
      <i className="fas fa-plane-departure type-switchers__icon" />
      Departures
    </NavLink>
    <NavLink
      // to={`/arrivals${location.search}`}
      to={`/arrivals`}
      className="type-switchers__link type-switchers__link_arrivals"
      activeClassName="active"
    >
      <i className="fas fa-plane-arrival type-switchers__icon" />
      Arrivals
    </NavLink>
  </div>
);

export default TypeSwitchers;
