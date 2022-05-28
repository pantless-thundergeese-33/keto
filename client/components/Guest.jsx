import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Guest = props => {

    return (
        <div id="guest">
            <Link to={'/home'}>
              <button onClick={props.setGuest}>
                Continue as Guest
              </button>
            </Link>
        </div>
    );
};

export default Guest;