import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  poster: {
    height: 100,
    width: 70,
  },
  infoWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
    flex: 1,
  },
  titleText: {
    fontSize: 14,
    textAlign: 'left',
  },
  yearText: {
    fontSize: 12,
    fontWeight: '700',
  },
  typeText: {
    fontSize: 12,
  },
});

export default styles;
