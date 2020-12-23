import {SET_SEARCH_RESULT, SET_ERROR_SEARCH, SET_MOVIE, SET_MORE_DATA_SEARCH} from '../actionTypes';

const INITIAL_STATE = {
  searchList: [],
  searchError: '',
  currentMovie: null,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT: {
      return {
        ...state,
        searchList: action.payload,
      };
    }
    case SET_ERROR_SEARCH: {
      return {
        ...state,
        searchError: action.payload,
      };
    }
    case SET_MOVIE: {
      return {
        ...state,
        currentMovie: action.payload,
      };
    }
    case SET_MORE_DATA_SEARCH: {
      return {
        ...state,
        searchList: [...state.searchList, ...action.payload],
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
