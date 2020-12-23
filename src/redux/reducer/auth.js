import {LOG_IN, LOG_OUT} from '../actionTypes';

const INITIAL_STATE = {
  user: {
    username: '',
    password: '',
  },
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        user: {
          username: '',
          password: '',
        },
      };
    }
    default:
      return state;
  }
};

export default authReducer;
