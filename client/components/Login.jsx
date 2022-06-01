import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserActionCreator, setUserActionCreator } from '../actions/actions';
import { Link } from 'react-router-dom';

/**
 * The current version of Login uses Alert messages for debugging. You should absolutely, 100%
 * remove these from a production app. Using alerts are bad UX.
 */
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dispatchers = {
    setGuest: () => dispatch(setGuestActionCreator()),
    addUser: (username) => dispatch(addUserActionCreator(username)),
    setUser: (username) => dispatch(setUserActionCreator(username)),
  };

  async function handleLogin() {
    try {
      const response = await fetch(`/api/login?username=${username}&password=${password}`);
      const json = await response.json();

      if (!json || !json.msg) {
        console.error('incorrect username and/or password');
        return;
      }

      dispatchers.setUser(username);
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

      if (!response.ok) {
        console.error('Response did not come back with usable status code.');
        return;
      }

      const createdUsername = await response.json();
      if (typeof createdUsername !== 'string' || createdUsername.length === 0) {
        console.error("Server didn't send back response data correctly.");
        return;
      }

      dispatchers.addUser(createdUsername);
      navigate('/login');
    } catch (err) {
      console.error(err instanceof Error ? err.stack : err);
    }
  }

  return (
    <div className="login-container">
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
          <button onClick={handleLogin}>Log In</button>
          <button onClick={handleAccountCreation}>Create Account</button>
        </div>
      </div>

      <div className="guest">
        <Link to={'/home'} onClick={dispatchers.setGuest} className="guest-link-btn">
          Continue as Guest
        </Link>
      </div>

      <div className="flex-spacer"></div>
    </div>
  );
};

export default Login;
