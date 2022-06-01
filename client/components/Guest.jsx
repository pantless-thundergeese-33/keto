import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Guest = (props) => {
  return (
    <div className="guest">
      <Link to={'/home'} onClick={props.setGuest} className="guest-link-btn">
        Continue as Guest
      </Link>
    </div>
  );
};

export default Guest;
