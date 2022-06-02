import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions';
import ElectricityQueries from '../components/ElectricityQueries.jsx';
import FlightQueries from '../components/FlightQueries.jsx';
import ShippingQueries from '../components/ShippingQueries.jsx';
import { useNavigate } from 'react-router-dom';

const queryComponentList = {
  '': () => <p>Search an activity to find its carbon footprint!</p>,
  electricity: (carbonValue) => <ElectricityQueries updateCarbon={carbonValue} />,
  flight: (carbonValue) => <FlightQueries updateCarbon={carbonValue} />,
  shipping: (carbonValue) => <ShippingQueries updateCarbon={carbonValue} />,
};

const QueriesContainer = () => {
  const { isUser, activity, carbon } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const updateCarbon = (carbon) => dispatch(actions.updateCarbonActionCreator(carbon));

  const addBtnHelper = async () => {
    try {
      const result = await fetch('/api/activity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: isUser[1],
          activity: activity,
          carbon_lb: carbon,
        }),
      });

      /*TODO: update redux store to rerender cartContainer with updated/new activity*/
    } catch (err) {
      console.error(err instanceof Error ? err.stack : err);
    }
  };

  const addButton = (
    <div className="addBtn">
      {carbon == null ? null : (
        <button className="homeBtn" id="addBtn" onClick={addBtnHelper}>
          Add
        </button>
      )}
    </div>
  );

  // const backButton = (
  //   <div className="addBtn">
  //     <button className="homeBtn" id="addBtn" onClick={handleOnClick}>
  //       Return Home
  //     </button>
  //   </div>
  // );

  return (
    <div id="queriesContainer">
      {queryComponentList[activity](updateCarbon)}
      <div className="carbonOutput">
        {carbon == null ? '' : `${carbon} lbs of Carbon Emissions`}
      </div>
      {addButton}
    </div>
  );
};

export default QueriesContainer;
