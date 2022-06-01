import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActivityActionCreator } from '../actions/actions';

// Car option existed but was commented out; may want to add back at some point
const availableOptions = Object.freeze(['', 'electricity', 'flight', 'shipping']);

const Search = () => {
  const [selectedOption, setSelectedOption] = useState(availableOptions[0]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    dispatch(setActivityActionCreator(value));
  };

  return (
    <div className="search-container">
      <label htmlFor="searchList">Choose an activity:</label>
      <select id="searchList" value={selectedOption} onChange={handleChange}>
        {availableOptions.map((op) => (
          <option key={op}>{op}</option>
        ))}
      </select>
    </div>
  );
};

export default Search;
