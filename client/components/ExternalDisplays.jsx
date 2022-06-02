import React from 'react';
import Iframe from 'react-iframe';

const carbonDisplays = () => {
  return (
    <Iframe
      src="https://www.theworldcounts.com/embed/challenges/23"
      width="300px"
      height="100px"
      id="carbonDisplay1"
      //display="initial"
      //position="relative"
    />
  );
};

export default carbonDisplays;

//<iframe title='Tons of CO2 emitted into the atmosphere' src='https://www.theworldcounts.com/embed/challenges/23' sandbox></iframe>

// <iframe title='Tons of CO2 emitted into the atmosphere' src='https://www.theworldcounts.com/embed/challenges/23?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14' style='border: none' height='100' width='300'></iframe>
