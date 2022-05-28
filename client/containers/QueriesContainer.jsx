import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


// const mapStateToProps = state => {}

// const mapDispatchToProps = dispatch => {}

const QueriesContainer = props => {
  let query;
  // if (props.activity === '') query = <p>search an activity to find its carbon footprint</p>;
  // else if (props.activity === 'Run') query = <Run />;

  return (
    <div id="queriesContainer">
      {query}
    </div>
  );
};

export default QueriesContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(QueriesContainer);