import {StyleSheet} from 'react-native';
import {themeColors} from '~/common/constants/colors.constants';

const sendStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleRoot: {
    marginTop: 10,
  },
  recentsText: {
    color: themeColors.contentPrimary,
    fontSize: 15,
    marginBottom: 10,
  },
  boxStyle: {
    marginTop: 25,
  },
});

export default sendStyles;
