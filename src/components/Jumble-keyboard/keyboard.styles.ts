import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '~/common/constants/colors.constants';

const jumbleKeyboardStyles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    height: hp(30),
    width: '100%',
    backgroundColor: colors.gray100,
    paddingTop: hp(0.3),
  },
  keysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp(2),
    justifyContent: 'center',
  },
  key: {
    padding: wp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
    backgroundColor: colors.white,
  },
  keyBorder: {
    width: '30%',
    backgroundColor: colors.gray200,
    borderRadius: wp(2),
    paddingBottom: StyleSheet.hairlineWidth * 5,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  specialKey: {
    backgroundColor: 'transparent',
    padding: wp(-2), // negating the parent padding
    justifyContent: 'center',
    elevation: 0,
  },
});

export default jumbleKeyboardStyles;
