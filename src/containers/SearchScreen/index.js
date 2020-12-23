import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {SearchBar} from 'react-native-elements';

import EmptySearchList from '../../components/EmptySearchList';
import MovieSearch from '../../components/MovieSearch';
import MainWrapper from '../../components/MainWrapper';
import useDebounce from '../../utils/useDebounce';
import {
  getApiSearch,
  getMovieById,
  getMoreDataSearch,
} from '../../redux/actions/movie';

import styles from './styles';

const SearchScreen = (props) => {

  const [searchString, setSearchString] = useState('');
  const {searchList, searchError, currentMovie} = props;

  useEffect(() => {
    if (currentMovie) {
      props.navigation.navigate('MovieScreen', {currentMovie});
    }
  }, [currentMovie]);

  const debouncedSearch = useDebounce(searchString, 500);

  useEffect(() => {
    if (debouncedSearch.length > 3) {
      props.dispatchGetSearchList(debouncedSearch);
    }
  }, [debouncedSearch]);

  const handleSearchInput = (value) => {
    if (value.length < 20) {
      setSearchString(value);
    }
  };

  const selectMovie = (id) => {
    props.dispatchGetMovieById(id);
  };

  const handleLoadMoreElements = () => {
    props.dispatchGetMoreDataSearch(searchString, searchList.length);
  };

  return (
    <MainWrapper>
      <View style={styles.wrapper}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={handleSearchInput}
          value={searchString}
          lightTheme
          style={styles.searchString}
        />
        <FlatList
          keyExtractor={(item, i) => item.imdbID}
          data={searchList}
          renderItem={({item}) => (
            <MovieSearch
              movie={item}
              selectMovie={() => selectMovie(item.imdbID)}
            />
          )}
          contentContainerStyle={styles.flatListContainer}
          ListEmptyComponent={<EmptySearchList text={searchError} />}
          onEndReached={() => handleLoadMoreElements()}
        />
      </View>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({
  searchList: state.movie.searchList,
  searchError: state.movie.searchError,
  currentMovie: state.movie.currentMovie,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetSearchList: (searchString) => dispatch(getApiSearch(searchString)),
  dispatchGetMovieById: (id) => dispatch(getMovieById(id)),
  dispatchGetMoreDataSearch: (searchString, searchLength) =>
    dispatch(getMoreDataSearch(searchString, searchLength)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
