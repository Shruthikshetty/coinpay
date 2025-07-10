import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const loginStyles = StyleSheet.create({
  root: {
    paddingHorizontal: wp(3),
    paddingTop: hp(2.2),
    flex: 1,
  },
});

export default loginStyles;
