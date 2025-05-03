import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors.constants';

export const LinkButtonStyles = StyleSheet.create({
  link: {
    fontSize: 15,
    color: colors.blue500,
    textDecorationLine: 'underline',
  },
  center: {
    textAlign: 'center',
  },
});

// imported as default
const ButtonStyles = StyleSheet.create({
  root: {
    padding: 10,
    borderRadius: 20,
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonSquare: {
    borderRadius: 5,
  },
  buttonBorder: {
    borderWidth: 1,
    backgroundColor: colors.white,
  },
});
export default ButtonStyles;
