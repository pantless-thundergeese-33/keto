import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Login = props => {

  return (
    <div className="login">
      <h3>Log In</h3>
      <input id="username" type="text" placeholder="username" />
      <input id="password" type="password" placeholder="password" />
      <div className="signInButtons">
        <button>Log In</button>
        <button>Create Account</button>
      </div>
    </div>
  );
};

export default Login;