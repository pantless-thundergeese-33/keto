import React from 'react';
// const cors = require('cors')


const ElectricityQueries = props => {
  
  const checkBtnHelper = async () => {
    // const eUnit = document.getElementById('electricity_unit').value;
    const eValue = document.getElementById('electricity_value').value;
    console.log('eValue', eValue);
    const country = document.getElementById('country').value;
    console.log('country', country);
    const province = document.getElementById('state').value;
    let response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
      method: 'POST',
      headers: {
        'Authorization':'Bearer gvwgBGeBXt6aeorzf8QVxQ',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        type: 'electricity',
        electricity_unit: 'kwh',
        electricity_value: eValue,
        country: country,
        state: province,
      })
    })
    .catch(err => console.log('error: ', err));
    response = await response.json();
    const { carbon_lb } = response.data.attributes;
    props.updateCarbonActionCreator(carbon_lb);
    return;
  };
  
  return (
    <div className="queriesFields" id='electricityFields'>
      <label htmlFor='electricity_value'>Electricity used in kwh:</label>
      <input id='electricity_value' type='text'></input>
      <label htmlFor='country'>Country:</label>
      <input id='country' type='text'></input>
      <label htmlFor='state'>State:</label>
      <input id='state' type='text'></input>
      <button className='homeBtn' id='checkBtn' onClick={checkBtnHelper}>Check</button>
    </div>
  )
}

export default ElectricityQueries;
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
