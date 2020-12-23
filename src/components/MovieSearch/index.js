import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import styles from './styles';

const MovieSearch = (props) => {
  const {movie} = props;
  return (
    <TouchableOpacity
      style={styles.mainWrapper}
      onPress={() => props.selectMovie()}>
      <SharedElement id={`image-${movie.imdbID}`}>
        <Image
          source={{uri: movie.Poster}}
          style={styles.poster}
        />
      </SharedElement>
      <View style={styles.infoWrapper}>
        <SharedElement id={`title-${movie.imdbID}`}>
          <Text style={styles.titleText}>{movie.Title}</Text>
        </SharedElement>
        <Text style={styles.typeText}>{movie.Type}</Text>
        <Text style={styles.yearText}>{movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieSearch;
