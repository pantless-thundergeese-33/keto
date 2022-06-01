import React from 'react';

const Search = (props) => {
  return (
    <select
      id="searchList"
      onChange={() => props.setActivity(document.getElementById('searchList').value)}
    >
      <option value="">Choose an Activity</option>
      <option value="electricity">Electricity</option>
      {/* <option value="car">Car</option> */}
      <option value="flight">Flight</option>
      <option value="shipping">Shipping</option>
    </select>
  );
};

export default Search;
