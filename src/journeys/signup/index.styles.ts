import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(3),
    paddingTop: hp(1),
  },
  root: {
    paddingHorizontal: 0,
  },
  formContainer: {
    marginTop: hp(1.5),
    gap: hp(1.5),
  },
});

export default signupStyles;
