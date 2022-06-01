import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

import Search from '../components/Search.jsx';
import QueriesContainer from './QueriesContainer.jsx';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const setActivity = (activity) => dispatch(actions.setActivityActionCreator(activity));

  return (
    <div id="searchContainer">
      <Search setActivity={setActivity} />
      <QueriesContainer />
    </div>
  );
};

export default SearchContainer;
