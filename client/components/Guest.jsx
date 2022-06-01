import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Guest = (props) => {
  return (
    <div className="guest">
      <Link to={'/home'}>
        <button className="guestBtn" onClick={props.setGuest}>
          Continue as Guest
        </button>
      </Link>
    </div>
  );
};

export default Guest;
