import * as types from '../constants/actionTypes';

export const setUserActionCreator = username => ({
  type: types.SET_USER,
  payload: username,
});

export const setGuestActionCreator = () => ({
  type: types.SET_GUEST,
});

export const addUserActionCreator = username => ({
  type: types.ADD_USER,
  payload: username,
});