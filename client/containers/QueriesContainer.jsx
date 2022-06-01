import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ElectricityQueries from '../components/ElectricityQueries.jsx';
import FlightQueries from '../components/FlightQueries.jsx';
import ShippingQueries from '../components/ShippingQueries.jsx';

const mapStateToProps = (state) => ({
  isUser: state.cart.isUser, // [ true/false, username ]
  activity: state.cart.activity, //
  carbon: state.cart.carbon,
});

const mapDispatchToProps = (dispatch) => ({
  updateCarbon: (carbon) => dispatch(actions.updateCarbonActionCreator(carbon)),
});

const QueriesContainer = (props) => {
  const addBtnHelper = async () => {
    await fetch('/api/activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: props.isUser[1],
        activity: props.activity,
        carbon_lb: props.carbon,
      }),
    }).catch((error) => {
      console.error('Error:', error);
    });
    /*TODO: update redux store to rerender cartContainer with updated/new activity*/
    return;
  };

  let query;
  if (props.activity === '') query = <p>search an activity to find its carbon footprint</p>;
  else if (props.activity === 'electricity')
    query = <ElectricityQueries updateCarbon={props.updateCarbon} />;
  else if (props.activity === 'flight') query = <FlightQueries updateCarbon={props.updateCarbon} />;
  else if (props.activity === 'shipping')
    query = <ShippingQueries updateCarbon={props.updateCarbon} />;

  let carbonOutput, addBtn;
  if (props.carbon == null) {
    carbonOutput = <div className="carbonOutput"></div>;
    addBtn = <div className="addBtn"></div>;
  } else {
    carbonOutput = <div className="carbonOutput">{props.carbon} lbs of Carbon Emissions</div>;
    addBtn = (
      <div className="addBtn">
        <button className="homeBtn" id="addBtn" onClick={addBtnHelper}>
          Add
        </button>
      </div>
    );
  }

  return (
    <div id="queriesContainer">
      {query}
      {carbonOutput}
      {addBtn}
    </div>
  );
};

// export default QueriesContainer;
export default connect(mapStateToProps, mapDispatchToProps)(QueriesContainer);
