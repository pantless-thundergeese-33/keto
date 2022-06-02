import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserActionCreator, setUserActionCreator } from '../actions/actions';

/**
 * The current version of Login uses Alert messages for debugging. You should absolutely, 100%
 * remove these from a production app. Using alerts are bad UX.
 */
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogin() {
    try {
      const response = await fetch(`/api/login?username=${username}&password=${password}`);
      const json = await response.json();

      if (!json || !json.msg) {
        console.error('incorrect username and/or password');
        return;
      }

      dispatch(setUserActionCreator(username));
      navigate('/login');
    } catch (err) {
      console.error(err instanceof Error ? err.stack : err);
    }
  }

  async function handleAccountCreation() {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const createdUsername = await response.json();
      if (typeof createdUsername !== 'string' || createdUsername.length === 0) {
        console.error("Server didn't send back response data correctly.");
        return;
      }

      dispatch(addUserActionCreator(createdUsername));
      navigate('/login');
    } catch (err) {
      console.error(err instanceof Error ? err.stack : err);
    }
  }

  return (
    <div className="login">
      <h3>Log In</h3>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <div className="signInButtons">
        <button onClick={handleLogin} onBlur={handleLogin}>
          Log In
        </button>

        <button onClick={handleAccountCreation} onBlur={handleAccountCreation}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;
