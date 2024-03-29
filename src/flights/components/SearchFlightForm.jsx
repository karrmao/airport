import React, { useState } from 'react';
import '../../styles/searchFlightForm.scss';
import { useSearchParams } from 'react-router-dom';

const SearchFlightForm = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const handleChange = e => setSearchInputValue(e.target.value);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <form
      className="search-flights"
      onSubmit={e => {
        e.preventDefault();
        searchParams.set('search', searchInputValue);
        setSearchParams(searchParams);
      }}
    >
      <h2 className="search-flights__title">FLIGHT SEARCH</h2>
      <div className="search-flights__container">
        <span className="search-flights__icon">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="search-flights__input"
          placeholder="Type city name or flight number"
          value={searchInputValue}
          onChange={handleChange}
        />

        <button type="submit" className="search-flights__btn">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchFlightForm;
