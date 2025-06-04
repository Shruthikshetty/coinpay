import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '~/common/constants/colors.constants';

const welcomeStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    paddingHorizontal: wp(3),
    alignItems: 'center',
    paddingTop: hp(3),
  },
  img: {
    width: wp(90),
    height: hp(40),
  },
  titleCenter: {
    textAlign: 'center',
  },
});

export default welcomeStyles;
