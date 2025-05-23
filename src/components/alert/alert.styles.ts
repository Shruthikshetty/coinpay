import {StyleSheet} from 'react-native';

const alertStyles = StyleSheet.create({
  root: {
    width: '90%',
    padding: 10,
    paddingRight: 15,
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 5,
    elevation: 3,
  },
  message: {
    fontSize: 16,
  },
});

export default alertStyles;
