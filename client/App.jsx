import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer.jsx';
import { connect } from "react-redux";

const mapState = state => state;

const App = props => {
    return (
        <div>
            <main>
                <Routes>
                    <Route exact path='/' element={ <LoginContainer /> } />
                    
                   {/*  <Route exact path='/home' element={ <Home /> } / */}
                </Routes>
            </main>
        </div>
    )
}


export const ConnectedApp = connect(mapState)(App);