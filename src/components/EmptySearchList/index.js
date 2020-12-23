import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const EmptySearchList = (props) => (
  <View style={styles.textWrapper}>
    <Text style={styles.emptyText}>{props.text || 'Start taping...'}</Text>
  </View>
);

export default EmptySearchList;
