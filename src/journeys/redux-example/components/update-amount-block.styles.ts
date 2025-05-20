import {StyleSheet} from 'react-native';
import {themeColors} from '~/common/constants/colors.constants';

const updateAmountBlockStyles = StyleSheet.create({
  root: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    color: themeColors.contentPrimary,
    textAlign: 'center',
    marginVertical: 5,
  },
  buttonContainer: {
    gap: 10,
  },
});

export default updateAmountBlockStyles;
