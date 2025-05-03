import {StyleSheet} from 'react-native';

const headerPanelStyles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    flex: 3,
  },
  flex1: {
    flex: 1,
  },
  flex6: {
    flex: 6,
  },
});

export default headerPanelStyles;
