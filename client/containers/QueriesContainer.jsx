import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ElectricityQueries from '../components/ElectricityQueries.jsx';
import FlightQueries from '../components/FlightQueries.jsx';
import ShippingQueries from '../components/ShippingQueries.jsx';

// type: electricity,
//     electricity_unit: "mwh",
//     country: "",
//     *state: ""


const mapStateToProps = state => ({
  activity: state.cart.activity,
  carbon: state.cart.carbon,
});

const mapDispatchToProps = dispatch => ({
  updateCarbonActionCreator: (carbon) => dispatch(actions.updateCarbonActionCreator(carbon)),
});

const QueriesContainer = props => {
  
  const addBtnHelper = async () => {/*fetch request here to /api (proxy)*/return;};

  let query;
  if (props.activity === '') query = (<p>search an activity to find its carbon footprint</p>);
  else if (props.activity === 'electricity') query = (<ElectricityQueries updateCarbonActionCreator={props.updateCarbonActionCreator} />);
  else if (props.activity === 'flight') query = (<FlightQueries updateCarbonActionCreator={props.updateCarbonActionCreator} />);
  else if (props.activity === 'shipping') query = (<ShippingQueries updateCarbonActionCreator={props.updateCarbonActionCreator} />);

  let carbonOutput, addBtn;
  if (props.carbon == null) {
    carbonOutput = (<div className='carbonOutput'></div>);
    addBtn = (<div className='addBtn'></div>);
  } else {
    carbonOutput = (<div className='carbonOutput'>{props.carbon} lbs of Carbon Emissions</div>);
    addBtn = (<div className='addBtn'><button className='homeBtn' id='addBtn' onClick={addBtnHelper}>Add</button></div>);
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