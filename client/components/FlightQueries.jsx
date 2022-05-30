import React from 'react';
// const cors = require('cors')


const FlightQueries = props => {
  
  const checkBtnHelper = async () => {
    // const eUnit = document.getElementById('electricity_unit').value;
    const passengers = document.getElementById('passengers').value;
    const departing = document.getElementById('departing').value;
    const arriving = document.getElementById('arriving').value;
    let response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
      method: 'POST',
      headers: {
        'Authorization':'Bearer gvwgBGeBXt6aeorzf8QVxQ',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        type: 'flight',
        passengers: passengers,
        legs: [
          {departure_airport: departing, destination_airport: arriving}
        ]
      })
    })
    .catch(err => console.log('error: ', err));
    response = await response.json();
    const { carbon_lb } = response.data.attributes;
    props.updateCarbonActionCreator(carbon_lb);
    return;
  };
  
  return (
    <div className="queriesFields" id='flightFields'>
      <label htmlFor='passengers'>Number of Passengers:</label>
      <input id='passengers' type='text'></input>
      <label htmlFor='departing'>Departing Airport (e.g. JFK):</label>
      <input id='departing' type='text'></input>
      <label htmlFor='arriving'>Arriving Airport (e.g. LAX):</label>
      <input id='arriving' type='text'></input>
      <button id='checkBtn' onClick={checkBtnHelper}>Check</button>
    </div>
  )
}

export default FlightQueries;
/*
POST request
headers: 
  Authorization: Bearer gvwgBGeBXt6aeorzf8QVxQ,
  Content-Type: application/json

request body
  {
    type: electricity,
    electricity_unit: "mwh",
    country: "",
    *state: ""
  }

response body
  {
    id:
    type:
    data {
      attributes: {
        country:
        state:
        electricity_unit:
        electricity_value:
        estimated_at: 
        carbon_g:
        carbon_lb:
        carbon_kg:
        carbon_mt:
      }
    }
  }
*/
