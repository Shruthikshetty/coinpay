import {StyleSheet} from 'react-native';
import {colors, themeColors} from '~/common/constants/colors.constants';

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

export const ProgressBarStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.info,
    height: 5,
  },
  fill: {
    height: '100%',
    backgroundColor: themeColors.primary,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
});
