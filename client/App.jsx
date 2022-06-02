import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import scss from './stylesheets/styles.scss';

import Login from './components/Login.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import CarbonDisplay from './components/CarbonDisplay.jsx';
import Navbar from './components/Navbar.jsx';

const mapState = (state) => state;

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="flex-center">
        <main>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<HomeContainer />} />
            <Route path="/login" element={<Navigate to="/home" />} />
          </Routes>

          <CarbonDisplay />
        </main>
      </div>
    </div>
  );
};

export const ConnectedApp = connect(mapState)(App);
