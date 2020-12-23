import {
  GET_API_SEARCH,
  GET_MOVIE_BY_ID,
  GET_MORE_DATA_SEARCH,
} from '../actionTypes';

export const getApiSearch = (searchString) => ({
  type: GET_API_SEARCH,
  payload: searchString,
});

export const getMovieById = (id) => ({
  type: GET_MOVIE_BY_ID,
  payload: id,
});

export const getMoreDataSearch = (searchString, searchLength) => ({
  type: GET_MORE_DATA_SEARCH,
  payload: {searchString, searchLength},
});
