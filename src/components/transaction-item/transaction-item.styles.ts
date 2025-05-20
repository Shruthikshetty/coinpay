import {StyleSheet} from 'react-native';
import {colors, themeColors} from '~/common/constants/colors.constants';

const TransactionItemStyles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 25,
  },
  title: {
    fontSize: 15,
    fontWeight: 'normal',
    color: themeColors.contentPrimary,
  },
  titleSubtitleRoot: {
    gap: 1,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'normal',
    color: themeColors.contentSecondary,
  },
  amount: {
    fontSize: 15,
    justifyContent: 'flex-end',
  },
  subContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditColor: {
    color: colors.green500,
  },
  debitColor: {
    color: colors.red500,
  },
});

export default TransactionItemStyles;
