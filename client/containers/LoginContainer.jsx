import React from 'react';
import Login from '../components/Login.jsx';
import Guest from '../components/Guest.jsx';

const LoginContainer = () => {
  return (
    <div className="loginContainer">
      <Login />
      <Guest />
    </div>
  );
};

export default LoginContainer;
