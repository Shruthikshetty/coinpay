import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const headerLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(1.5),
  },
  content: {
    flex: 1,
  },
  button: {
    marginBottom: hp(4),
    marginHorizontal: wp(3),
  },
});
