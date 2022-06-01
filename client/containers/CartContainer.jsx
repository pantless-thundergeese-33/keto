import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ActivityDisplay from '../components/ActivityDisplay.jsx';
import TotalsDisplay from '../components/TotalsDisplay.jsx';

// const mapStateToProps = state => {}

// const mapDispatchToProps = dispatch => {}

const CartContainer = (props) => {
  // const activities = [];
  // // for (let i = 0; i < props.activitiesList.length; i++) {
  // //   activities.push(<ActivityDisplay key={i} />);
  // // }

  return (
    <div id="cartContainer">
      <TotalsDisplay />
    </div>
  );
};
export default CartContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
