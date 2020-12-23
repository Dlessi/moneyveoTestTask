import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  moviePoster: {
    width: 140,
    height: 200,
  },
  titleText: {
    fontWeight: '500',
    fontSize: 14,
    marginTop: 10,
  },
  plotText: {
    fontSize: 12,
    marginTop: 15,
  },
  closeWrapper: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  actorsWrapper: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    marginTop: 15,
  },
  actorsTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
  actorName: {
    fontSize: 12,
  },
});

export default styles;
