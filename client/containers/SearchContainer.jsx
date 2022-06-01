import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Search from '../components/Search.jsx';
import QueriesContainer from './QueriesContainer.jsx';

const mapDispatchToProps = (dispatch) => ({
  setActivity: (activity) => dispatch(actions.setActivityActionCreator(activity)),
});

const SearchContainer = (props) => {
  return (
    <div id="searchContainer">
      <Search setActivity={props.setActivity} />
      <QueriesContainer />
    </div>
  );
};

// export default SearchContainer;
export default connect(null, mapDispatchToProps)(SearchContainer);
