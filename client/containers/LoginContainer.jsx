import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Login from '../components/Login.jsx';
import Guest from '../components/Guest.jsx';

const mapStateToProps = state => ({
    isUser: state.cart.isUser,
});

const mapDispatchToProps = dispatch => ({
    setUser: (username) => dispatch(setUserActionCreator(username)),
    setGuest: () => dispatch(setGuestActionCreator()),
    addUser: (username) => dispatch(addUserActionCreator(username)),
});

const LoginContainer = props => {
    return (
        <div className="loginContainer">
            < Login setUser={props.setUser} addUser={props.addUser}/>
            < Guest setGuest={props.setGuest}/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);