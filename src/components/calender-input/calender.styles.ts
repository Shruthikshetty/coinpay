import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '~/common/constants/colors.constants';
import {getOpacity} from '~/common/utils/get-opacity';

const calendarInputStyles = StyleSheet.create({
  root: {
    borderRadius: wp(3),
    backgroundColor: colors.white,
    gap: hp(2),
    overflow: 'hidden',
    paddingHorizontal: wp(3),
    paddingTop: hp(1.5),
    paddingBottom: hp(2),
  },
  modalContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: getOpacity(colors.gray500, 60),
    paddingHorizontal: wp(10),
  },
  headerStyle: {
    gap: hp(1),
  },
});

export default calendarInputStyles;
