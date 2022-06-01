import * as types from '../constants/actionTypes';

const initialState = {
  isUser: [null, null], //isUser[0]: true if user, false if guest; isUser[1]: username
  activity: '',
  carbon: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      console.log('reducer set user', action.payload);
      return {
        ...state,
        isUser: [true, action.payload],
      };

    case types.SET_GUEST:
      return {
        ...state,
        isUser: [false, null],
      };

    case types.ADD_USER:
      console.log('reducer add user', action.payload);
      return {
        ...state,
        isUser: [true, action.payload],
      };

    case types.SET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };

    case types.UPDATE_CARBON:
      return {
        ...state,
        carbon: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default reducer;
