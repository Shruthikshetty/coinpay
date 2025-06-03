import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const pinWithJumbledKeyboardStyles = StyleSheet.create({
  PinContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: hp(17),
  },
  root: {
    flex: 1,
  },
});

export default pinWithJumbledKeyboardStyles;
