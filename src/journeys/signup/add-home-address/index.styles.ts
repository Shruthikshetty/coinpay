import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const addHomeAddressStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(3),
    marginTop: hp(1.5),
  },
  form: {
    marginTop: hp(3),
    gap: hp(2),
  },
});

export default addHomeAddressStyles;
