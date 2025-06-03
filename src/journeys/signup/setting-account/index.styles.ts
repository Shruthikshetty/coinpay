import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '~/common/constants/colors.constants';

const accountSetupStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    paddingHorizontal: wp(3),
    alignItems: 'center',
    paddingTop: hp(3),
  },
  titleCenter: {
    textAlign: 'center',
  },
  titleRoot: {
    marginTop: hp(2),
  },
  progressItemsContainer: {
    marginTop: hp(5),
    paddingHorizontal: wp(8),
  },
  separator: {
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: hp(1.5),
    borderColor: colors.info,
  },
});

export default accountSetupStyles;
