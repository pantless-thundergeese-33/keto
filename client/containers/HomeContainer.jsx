import React from 'react';

import SearchContainer from './SearchContainer.jsx';
import CartContainer from './CartContainer.jsx';

const HomeContainer = (props) => {
  return (
    <div id="homeContainer">
      <SearchContainer />
      {/* <CartContainer /> */}
    </div>
  );
};

export default HomeContainer;
