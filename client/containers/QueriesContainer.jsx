import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ElectricityQueries from '../components/ElectricityQueries.jsx';
import FlightQueries from '../components/FlightQueries.jsx';

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

  let query;
  if (props.activity === '') query = (<p>search an activity to find its carbon footprint</p>)
  else if (props.activity === 'electricity') query = (<ElectricityQueries updateCarbonActionCreator={props.updateCarbonActionCreator} />)
  else if (props.activity === 'flight') query = (<FlightQueries updateCarbonActionCreator={props.updateCarbonActionCreator} />);

  let carbonOutput;
  if (props.carbon == null) carbonOutput = (<div className='carbonOutput'></div>)
  else carbonOutput = (<div className='carbonOutput'>{props.carbon} lbs of Carbon Emissions</div>)

  return (
    <div id="queriesContainer">
      {query}
      {carbonOutput}
      {/* <button id='submitBtn'>Submit</button> */}
    </div>
  );
};

// export default QueriesContainer;
export default connect(mapStateToProps, mapDispatchToProps)(QueriesContainer);