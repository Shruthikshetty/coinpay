import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, themeColors} from '~/common/constants/colors.constants';
import {getOpacity} from '~/common/utils/get-opacity';

const dashedInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderBottomWidth: 2,
    borderColor: '#ccc',
    width: wp(8.5),
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(4.5),
  },
  charText: {
    textAlign: 'center',
    fontSize: 18,
    padding: 0,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
  cursor: {
    color: colors.gray900,
    fontSize: 24,
    opacity: 0.7,
  },
  activeColor: {
    color: themeColors.primary,
    borderColor: getOpacity(themeColors.primary, 70),
  },
});

export default dashedInputStyles;
