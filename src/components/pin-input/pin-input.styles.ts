import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '~/common/constants/colors.constants';

const pinInputStyles = StyleSheet.create({
  hidden: {
    position: 'absolute',
    opacity: 0,
  },
  dot: {
    height: wp(3),
    width: wp(3),
    backgroundColor: colors.info,
    borderRadius: wp(1.5),
  },
  dotContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(3.5),
  },
});

export default pinInputStyles;
