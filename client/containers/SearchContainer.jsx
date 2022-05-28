import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Search from '../components/Search.jsx';
import QueriesContainer from './QueriesContainer.jsx'

// const mapStateToProps = state => {}

// const mapDispatchToProps = dispatch => {}

const SearchContainer = props => {
  return (
    <div id="searchContainer">
      < Search />
      < QueriesContainer />
    </div>
  );
};

export default SearchContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);