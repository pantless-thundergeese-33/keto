import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import { connect } from "react-redux";

const mapState = state => state;

const App = props => {
    return (
        <div>
            <main>
                {/* // insert routes */}
            </main>
        </div>
    )
}


export const ConnectedApp = connect(mapState)(App);