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
  yearPickerContainer: {
    flex: 1,
    backgroundColor: getOpacity(colors.black, 50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearPicker: {
    backgroundColor: 'white',
    width: wp(70),
    height: '40%',
    borderRadius: 10,
    padding: 10,
  },
  yearItem: {
    paddingVertical: hp(1),
    alignItems: 'center',
  },
  yearText: {
    fontSize: 16,
    color: colors.gray700,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gray700,
    textAlign: 'center',
  },
  separator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.info,
  },
});

export default calendarInputStyles;
