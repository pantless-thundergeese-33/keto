import React from 'react';

const ShippingQueries = props => {
  
  const checkBtnHelper = async () => {
    const weightUnit = document.getElementById('weight_unit').value;
    const weightValue = document.getElementById('weight_value').value;
    const distanceUnit = document.getElementById('distance_unit').value;
    const distanceValue = document.getElementById('distance_value').value;
    const transport_method = document.getElementById('transport_method').value;
    let response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
      method: 'POST',
      headers: {
        'Authorization':'Bearer gvwgBGeBXt6aeorzf8QVxQ',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        type: 'shipping',
        weight_unit: weightUnit,
        weight_value: weightValue,
        distance_value: distanceValue,
        distance_unit: distanceUnit,
        transport_method: transport_method,
      })
    })
    .catch(err => console.log('error: ', err));
    response = await response.json();
    const { carbon_lb } = response.data.attributes;
    props.updateCarbon(carbon_lb);
    return;
  };
  
  return (
    <div className="queriesFields" id='flightFields'>
      <label htmlFor='weightValue'>Weight Value:</label>
      <input id='weight_value' type='text'></input>
      <label htmlFor='weightUnit'>Weight Unit:</label>
      <select id='weight_unit' type='text'>
        <option value='lb'>lb</option>
        <option value='g'>g</option>
        <option value='kg'>kg</option>
        <option value='mt'>Mt</option>
      </select>
      <label htmlFor='distanceValue'>Distance Value:</label>
      <input id='distance_value' type='text'></input>
      <label htmlFor='distanceUnit'>Distance Unit:</label>
      <select id='distance_unit' type='text'>
        <option value='km'>km</option>
        <option value='mi'>mi</option>
      </select>
      <label htmlFor='transportMethod'>Transport Method:</label>
      <select id='transport_method'>
        <option value="ship">Ship</option>
        <option value="train">Train</option>
        <option value="truck">Truck</option>
        <option value="plane">Plane</option>
      </select>
      <button className='homeBtn' id='checkBtn' onClick={checkBtnHelper}>Check</button>
    </div>
  )
}

export default ShippingQueries;
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
