import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setGuestActionCreator } from '../actions/actions';

const Guest = () => {
  const dispatch = useDispatch();
  const setGuest = () => dispatch(setGuestActionCreator());

  return (
    <div className="guest">
      <Link to={'/home'} onClick={setGuest} className="guest-link-btn">
        Continue as Guest
      </Link>
    </div>
  );
};

export default Guest;
