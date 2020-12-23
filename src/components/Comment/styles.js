import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  nameText: {
    fontWeight: '700',
    fontSize: 14,
  },
  commentText: {
    fontSize: 12
  },
  deleteWrapper: {
    position: 'absolute',
    right: 30,
    top: 10,
  },
});

export default styles;
