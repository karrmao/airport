import React from 'react';
import { NavLink } from 'react-router-dom';

import './typeSwitchers.scss';

const TypeSwitchers = () => (
  <div className="type-newswitchers">
    <NavLink to={`/departures${location.search}`} className="type-switchers__btn">
      <i className="fas fa-plane-departure" />
      Departures
    </NavLink>
    <NavLink to={`/arrivals${location.search}`} className="type-switchers__btn">
      <i className="fas fa-plane-arrival" />
      Arrivals
    </NavLink>
  </div>
);

export default TypeSwitchers;
