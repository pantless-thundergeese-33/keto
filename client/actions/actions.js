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

export const setActivityActionCreator = activity => ({
  type: types.SET_ACTIVITY,
  payload: activity,
});

export const updateCarbonActionCreator = carbon => ({
  type: types.UPDATE_CARBON,
  payload: carbon,
});