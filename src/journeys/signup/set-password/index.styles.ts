import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const setPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(3),
    marginTop: hp(1.5),
    justifyContent: 'space-between',
    paddingBottom: hp(4),
  },
  innerContainer: {
    gap: hp(2),
  },
});

export default setPasswordStyles;
