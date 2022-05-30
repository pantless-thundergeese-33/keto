import * as types from '../constants/actionTypes';

const initialState = {
  isUser: [null, null], //isUser[0]: true if user, false if guest; isUser[1]: username
  allUsers: [],
  activity: '',
  carbon: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.GET_ALL_USERS:
    //   return {
    //     ...state,
    //   }

    case types.SET_USER:
      return {
        ...state,
        isUser: [true, action.payload],
      };

    case types.SET_GUEST:
      return {
        ...state,

      }

    case types.ADD_USER:
      return {
        ...state,
      }

    case types.SET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      }

    case types.UPDATE_CARBON:
      return {
        ...state,
        carbon: action.payload,
      }

    default: {
      return state;
    }
  }
};

export default reducer;