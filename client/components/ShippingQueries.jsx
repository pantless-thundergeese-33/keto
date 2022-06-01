import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCarbonActionCreator } from '../actions/actions';

const WEIGHT_UNITS = Object.freeze(['lb', 'g', 'kg', 'Mt']);
const DISTANCE_UNITS = Object.freeze(['km', 'mi']);
const TRANSPORT_METHODS = Object.freeze(['Ship', 'Train', 'Truck', 'Plane']);

const toSimpleOption = (value) => {
  const normalized = String(value).toLowerCase();
  return (
    <option key={normalized} value={normalized}>
      {normalized}
    </option>
  );
};

const updateIfNumber = (setter, event) => {
  const value = event.target.value;
  if (!Number.isNaN(Number(value))) {
    setter(value);
  }
};

const LabeledSelector = ({ id, labelText, choices, value, setValue }) => {
  return (
    <div className="labeled-selector">
      <label htmlFor={id}>{labelText}:</label>

      <select id={id} value={value} onChange={(e) => setValue(e.target.value)}>
        {choices.map(toSimpleOption)}
      </select>
    </div>
  );
};

const ShippingQueries = () => {
  const [weightValue, setWeightValue] = useState('');
  const [weightUnit, setWeightUnit] = useState(WEIGHT_UNITS[0]);
  const [distanceValue, setDistanceValue] = useState('');
  const [distanceUnit, setDistanceUnit] = useState(DISTANCE_UNITS[0]);
  const [transportMethod, setTransportMethod] = useState(TRANSPORT_METHODS[0]);

  const dispatch = useDispatch();
  const updateCarbon = (carbonValue) => dispatch(updateCarbonActionCreator(carbonValue));

  async function queryForCarbon() {
    try {
      const response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer gvwgBGeBXt6aeorzf8QVxQ',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'shipping',
          weight_unit: weightUnit,
          weight_value: weightValue,
          distance_value: distanceValue,
          distance_unit: distanceUnit,
          transport_method: transportMethod,
        }),
      });

      const json = await response.json();
      const carbonPerLb = json?.data?.attributes?.carbon_lb;
      if (carbonPerLb == null) {
        throw new Error('JSON response is not valid.');
      }

      updateCarbon(carbonPerLb);
    } catch (err) {
      console.error(err instanceof Error ? err.stack : stack);
    }
  }

  return (
    <div className="queriesFields" id="shippingFields">
      <label htmlFor="weight_value">Weight Value:</label>
      <input
        id="weight_value"
        type="text"
        value={weightValue}
        onChange={(e) => updateIfNumber(setWeightValue, e)}
      />

      <LabeledSelector
        id="weight_unit"
        labelText={'Weight (Units)'}
        choices={WEIGHT_UNITS}
        value={weightUnit}
        setValue={setWeightUnit}
      />

      <label htmlFor="distance_value">Distance Value:</label>
      <input
        id="distance_value"
        type="text"
        value={distanceValue}
        onChange={(e) => updateIfNumber(setDistanceValue, e)}
      />

      <LabeledSelector
        id="distance_unit"
        labelText={'Distance (Units)'}
        choices={DISTANCE_UNITS}
        value={distanceUnit}
        setValue={setDistanceUnit}
      />

      <LabeledSelector
        id="transport_method"
        labelText={'Transport Method'}
        choices={TRANSPORT_METHODS}
        value={transportMethod}
        setValue={setTransportMethod}
      />

      <button className="homeBtn" id="checkBtn" onClick={queryForCarbon}>
        Check
      </button>
    </div>
  );
};

export default ShippingQueries;
