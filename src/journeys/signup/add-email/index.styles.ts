import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const addEmailStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(1.5),
    paddingHorizontal: wp(3),
    gap: hp(2),
  },
});

export default addEmailStyles;
