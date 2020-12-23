import axios from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import UUIDGenerator from 'react-native-uuid-generator';

import {
  GET_API_SEARCH,
  SET_ERROR_SEARCH,
  SET_SEARCH_RESULT,
  GET_MOVIE_BY_ID,
  SET_MOVIE,
  SET_COMMENT,
  ADD_COMMENT,
  GET_MORE_DATA_SEARCH,
  SET_MORE_DATA_SEARCH,
} from '../actionTypes';

const apiURL = 'http://www.omdbapi.com/';
const apikey = 'd498c0a4';

function* searchApiGet(action) {
  try {
    const {payload} = action;
    const searchResult = yield call(axios.get, apiURL, {
      params: {s: payload, apikey},
    });
    yield put({type: SET_SEARCH_RESULT, payload: searchResult.data.Search});
  } catch (e) {
    yield put({type: SET_ERROR_SEARCH, payload: 'Error! Sorry try later...'});
  }
}

function* loadMoreSearch(action) {
  try {
    const {payload} = action;
    const pageNumber = Math.floor(payload.searchLength / 10) + 1;
    const searchResult = yield call(axios.get, apiURL, {
      params: {s: payload.searchString, apikey, page: pageNumber},
    });

    yield put({type: SET_MORE_DATA_SEARCH, payload: searchResult.data.Search});

  } catch (e) {

  }
}

function* getMovieById(action) {
  try {
    const {payload} = action;
    const movieResult = yield call(axios.get, apiURL,
      {params: {i: payload, apikey}}
    );
    yield put({type: SET_MOVIE, payload: movieResult.data});
  } catch (e) {
  }
}

function* addComment(action) {
  try {
    const {payload} = action;
    const uuid = yield call(UUIDGenerator.getRandomUUID);
    yield put({type: SET_COMMENT, payload: {...payload, id: uuid}});
  } catch(e) {

  }
}


function* watchSagas() {
  yield takeLatest(GET_API_SEARCH, searchApiGet);
  yield takeLatest(GET_MOVIE_BY_ID, getMovieById);
  yield takeLatest(ADD_COMMENT, addComment);
  yield takeLatest(GET_MORE_DATA_SEARCH, loadMoreSearch);
}

export default watchSagas;
