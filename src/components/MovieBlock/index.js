import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import styles from './styles';

const MovieBlock = (props) => {
  const [actorList, setActorList] = useState([]);

  const {currentMovie} = props;

  useEffect(() => {
    if (currentMovie.Actors) {
      setActorList(` ${currentMovie.Actors}`.split(','));
    }
  }, [currentMovie]);

  return (
    <View style={styles.wrapper}>
      <SharedElement id={`image-${currentMovie.imdbID}`}>
        <Image source={{uri: currentMovie.Poster}} style={styles.moviePoster} />
      </SharedElement>
      <SharedElement id={`title-${currentMovie.imdbID}`}>
        <Text style={styles.titleText}>{currentMovie.Title}</Text>
      </SharedElement>
      <Text style={styles.plotText}>{currentMovie.Plot}</Text>
      <View style={styles.actorsWrapper}>
        <Text style={styles.actorsTitle}>{'Actors:'}</Text>
        {actorList.map((actor) => (
          <Text key={actor} style={styles.actorName}>
            {actor}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default MovieBlock;
