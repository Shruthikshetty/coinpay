import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '~/common/constants/colors.constants';

const paginationStyles = StyleSheet.create({
  dotStyle: {
    backgroundColor: colors.gray200,
    borderRadius: wp(5),
    height: hp(1),
  },
  activeDotStyle: {
    backgroundColor: colors.blue400,
    borderRadius: wp(5),
    height: hp(1),
  },
  conatainer: {
    gap: wp(1.5),
  },
});

export default paginationStyles;
