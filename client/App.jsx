import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import scss from './stylesheets/styles.scss';

import LoginContainer from './containers/LoginContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';

const mapState = (state) => state;

const App = (props) => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<LoginContainer />} />
        <Route exact path="/home" element={<HomeContainer />} />
        <Route path="/login" element={<Navigate to="/home" />} />
      </Routes>
    </main>
  );
};

export const ConnectedApp = connect(mapState)(App);
