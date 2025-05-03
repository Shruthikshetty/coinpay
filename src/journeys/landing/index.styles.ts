import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors.constants';

const landingScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
  linkStyle: {
    color: colors.blue500,
    textAlign: 'center',
    fontSize: 20,
  },
  linkContainer: {
    gap: 5,
  },
});

export default landingScreenStyles;
