import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '~/common/constants/colors.constants';
import {getOpacity} from '~/common/utils/get-opacity';

const confirmPhoneModalStyles = StyleSheet.create({
  conatiner: {
    borderRadius: wp(5),
    backgroundColor: colors.white,
    paddingVertical: hp(3),
  },
  blur: {
    backgroundColor: getOpacity(colors.gray400, 60),
    justifyContent: 'center',
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  buttonContainer: {
    gap: hp(1),
    marginTop: hp(1.5),
  },
  cross: {
    position: 'absolute',
    top: hp(1.5),
    right: wp(5),
  },
  outerRim: {
    backgroundColor: colors.blue500,
    borderRadius: wp(5),
    paddingBottom: hp(0.5),
    maxHeight: hp(80),
    width: wp(85),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
    width: wp(60),
  },
});

export default confirmPhoneModalStyles;
