import {REGISTER_USER, ADD_COMMENT, DELETE_COMMENT} from '../actionTypes';

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const deleteComment = (movieId, commentId) => ({
  type: DELETE_COMMENT,
  payload: {movieId, commentId},
});
