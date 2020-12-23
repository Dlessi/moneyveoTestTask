import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';

import MainWrapper from '../../components/MainWrapper';
import MovieBlock from '../../components/MovieBlock';
import CommentField from '../../components/CommentField';
import Comment from '../../components/Comment';

import {addComment, deleteComment} from '../../redux/actions/storage';

import styles from './styles';

const MovieScreen = (props) => {
  const {currentMovie} = props.route.params;
  const {user} = props;


  const commentForThisMovie = props.comments[currentMovie.imdbID] || [];

  const handleAddComment = (comment) => {
    props.dispatchAddComment(currentMovie.imdbID, comment, user.username);
  };

  const handleDeleteComment = (commentId) => {
    props.dispatchDeleteComment(currentMovie.imdbID, commentId);
  };

  return (
    <MainWrapper>
      <FlatList
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => (
          <Comment
            comment={item}
            deleteComment={handleDeleteComment}
            isCanDelete={item.username === user.username}
          />
        )}
        data={commentForThisMovie}
        ListHeaderComponent={<MovieBlock currentMovie={currentMovie} />}
        contentContainerStyle={styles.wrapper}
      />
      <CommentField sendComment={handleAddComment} />
      <TouchableOpacity
        style={styles.closeWrapper}
        onPress={() => props.navigation.pop()}
      >
        <Icon name="close" size={30} />
      </TouchableOpacity>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  comments: state.store.comments,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddComment: (movieId, comment, username) =>
    dispatch(addComment({movieId, comment, username})),
  dispatchDeleteComment: (movieId, commentId) =>
    dispatch(deleteComment(movieId, commentId)),
});

MovieScreen.sharedElements = (route, otherRoute, showing) => {
  const {currentMovie} = route.params;
  return [
    {id: `image-${currentMovie.imdbID}`, animation: 'move'},
    {id: `title-${currentMovie.imdbID}`, animation: 'move'},
  ];
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
