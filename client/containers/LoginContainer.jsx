import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

import Login from '../components/Login.jsx';
import Guest from '../components/Guest.jsx';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const dispatchers = {
    setUser: (username) => dispatch(actions.setUserActionCreator(username)),
    setGuest: () => dispatch(actions.setGuestActionCreator()),
    addUser: (username) => dispatch(actions.addUserActionCreator(username)),
  };

  return (
    <div className="loginContainer">
      <Login setUser={dispatchers.setUser} addUser={dispatchers.addUser} />
      <Guest setGuest={dispatchers.setGuest} />
    </div>
  );
};

export default LoginContainer;
