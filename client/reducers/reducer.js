import * as types from '../constants/actionTypes';

const initialState = {
  isUser: [null, null],
  allUsers: []
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

    default: {
        return state;
    }
  }
};

export default reducer;