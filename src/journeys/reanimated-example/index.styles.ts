import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '~/common/constants/colors.constants';

const reanimatedexampleStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    flex: 1,
    marginTop: '10%',
    alignItems: 'center',
  },
  box: {
    borderRadius: 15,
    height: 100,
    maxWidth: wp(100),
    backgroundColor: colors.blue500,
  },
});

export default reanimatedexampleStyles;
