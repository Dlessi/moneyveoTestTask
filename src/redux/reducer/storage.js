import {REGISTER_USER, SET_COMMENT, DELETE_COMMENT} from '../actionTypes';

const INITIAL_STATE = {
  listUsers: [],
  comments: {},
};

const storageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        listUsers: [...state.listUsers, action.payload],
      };
    }
    case SET_COMMENT: {
      const {movieId, comment, username, id} = action.payload;

      const resultCommentsMovie = state.comments[movieId]
        ? [...state.comments[movieId], {comment, id, username}]
        : [{comment, id, username}];
      const resultComments = state.comments;
      resultComments[movieId] = resultCommentsMovie;

      return {
        ...state,
        comments: {
          ...resultComments,
        },
      };
    }
    case DELETE_COMMENT: {
      const {movieId, commentId} = action.payload;
      const resultComments = state.comments;
      resultComments[movieId] = resultComments[movieId].filter(
        (comment) => comment.id !== commentId,
      );
      return {
        ...state,
        comments: {
          ...resultComments,
        },
      };
    }
    default:
      return state;
  }
};

export default storageReducer;
