import React, { Component } from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';

const Login = props => {

  const navigate = useNavigate();

  const loginBtnHelper = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch(`/api/login?username=${username}&password=${password}`)
      .then(res => res.json())
      .then(data => {
        if (!data.msg) {
          alert('incorrect username and/or password');
        } else {
          props.setUser(document.getElementById('username').value);
          Navigate('/login');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const createAccountBtnHelper = async () => {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: document.getElementById('username').value, password: document.getElementById('password').value }),
    })
      .then(res => res.json())
      .catch((error) => {
        console.error('Error:', error);
      });
    await props.addUser(response);
    navigate('/login');
  }

  return (
    <div className="login">
      <h3>Log In</h3>
      <input id="username" type="text" placeholder="username" />
      <input id="password" type="password" placeholder="password" />
      <div className="signInButtons">
        <button onClick={loginBtnHelper}>Log In</button>
        <button onClick={createAccountBtnHelper}>Create Account</button>
      </div>
    </div>
  );
};

export default Login;