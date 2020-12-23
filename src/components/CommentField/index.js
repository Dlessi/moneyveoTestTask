import React, {useState} from 'react';
import {Input, Icon} from 'react-native-elements';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';

const CommentField = (props) => {

  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendComment = () => {
    if (comment.length > 10) {
      props.sendComment(comment);
      setComment('');
    } else {
      setErrorMessage('Minimum length of comment 10 chars');
    }
  };

  const handleSetComment = (value) => {
    if (value.length < 51) {
      setComment(value);
      setErrorMessage('');
    }
  };

  return (
    <View style={styles.wrapper}>
      <Input
        placeholder="start taping comment"
        style={styles.input}
        rightIcon={
          <TouchableOpacity onPress={() => handleSendComment()}>
            <Icon name="send" />
          </TouchableOpacity>
        }
        value={comment}
        onChangeText={(value) => handleSetComment(value)}
        errorMessage={errorMessage}
      />
    </View>
  );
};

export default CommentField;
