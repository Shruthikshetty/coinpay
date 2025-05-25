import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const addPersonalInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(3),
    paddingTop: hp(1.5),
  },
  form: {
    marginTop: hp(3),
    gap: hp(2),
  },
});

export default addPersonalInfoStyles;
