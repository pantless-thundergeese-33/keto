import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Login from '../components/Login.jsx';
import Guest from '../components/Guest.jsx';

const mapStateToProps = state => ({
    isUser:
});

const mapDispatchToProps = dispatch => ({

});

const LoginContainer = props => {
    return (
        <div id="loginContainer">
            < Login />
            < Guest />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);