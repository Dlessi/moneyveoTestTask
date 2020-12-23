import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const MainWrapper = (props) => (
  <View style={styles.container}>{props.children}</View>
);

export default MainWrapper;
