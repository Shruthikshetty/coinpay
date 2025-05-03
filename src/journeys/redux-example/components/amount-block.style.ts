import {StyleSheet} from 'react-native';
import {themeColors} from '~/common/constants/colors.constants';

const amountBlockStyles = StyleSheet.create({
  root: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    color: themeColors.contentPrimary,
    textAlign: 'center',
    marginVertical: 5,
  },
  amount: {
    fontSize: 15,
    color: themeColors.contentPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default amountBlockStyles;
