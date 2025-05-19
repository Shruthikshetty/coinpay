import {StyleSheet} from 'react-native';

const dashedInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderBottomWidth: 2,
    borderColor: '#ccc',
    width: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  charText: {
    textAlign: 'center',
    fontSize: 18,
    padding: 0,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
  cursor: {
    color: '#333',
    fontSize: 24,
    opacity: 0.7,
  },
});

export default dashedInputStyles;
