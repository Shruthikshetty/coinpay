import {StyleSheet} from 'react-native';
import {themeColors} from '~/common/constants/colors.constants';

const reduxexampleStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 25,
    color: themeColors.contentPrimary,
    textAlign: 'center',
  },
});

export default reduxexampleStyles;
