import {StyleSheet} from 'react-native';
import {colors, themeColors} from '~/common/constants/colors.constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const progressItemStyles = StyleSheet.create({
  progressItemRoot: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemNumberContainer: {
    width: wp(8),
    height: wp(8),
    backgroundColor: colors.blue100,
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickContainer: {
    width: wp(7),
    height: wp(7),
    backgroundColor: colors.blue500,
    borderRadius: wp(3.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: themeColors.contentSecondary,
    fontSize: 16,
  },
});

export default progressItemStyles;
