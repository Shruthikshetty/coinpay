import {StyleSheet} from 'react-native';
import {colors, themeColors} from '~/common/constants/colors.constants';

export const titleSubtitleStyles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    gap: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: themeColors.contentPrimary,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: themeColors.contentSecondary,
  },
});

export const parseTextStyles = StyleSheet.create({
  linktext: {
    color: colors.blue500,
    textDecorationLine: 'underline',
  },
});
