import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Login from '../components/Login.jsx';
import Guest from '../components/Guest.jsx';

const mapDispatchToProps = (dispatch) => ({
  setUser: (username) => dispatch(actions.setUserActionCreator(username)),
  setGuest: () => dispatch(actions.setGuestActionCreator()),
  addUser: (username) => dispatch(actions.addUserActionCreator(username)),
});

const LoginContainer = (props) => {
  return (
    <div className="loginContainer">
      <Login setUser={props.setUser} addUser={props.addUser} />
      <Guest setGuest={props.setGuest} />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(LoginContainer);
