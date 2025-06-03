import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const createPinStyles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: wp(3),
    marginBottom: hp(4),
  },
  titleRoot: {
    paddingHorizontal: wp(3),
    marginTop: hp(1.5),
  },
});

export default createPinStyles;
