import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './styles';

const Comment = (props) => {
  const {comment, isCanDelete} = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.nameText}>{comment.username}</Text>
      <Text style={styles.commentText}>{comment.comment}</Text>
      {isCanDelete ? (
        <TouchableOpacity
          style={styles.deleteWrapper}
          onPress={() => props.deleteComment(comment.id)}
        >
          <Icon name="delete" color="#FF0000" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Comment;
