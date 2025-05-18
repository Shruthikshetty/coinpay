import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, themeColors} from '~/common/constants/colors.constants';

const preLoginStyles = StyleSheet.create({
  root: {
    paddingHorizontal: 0,
  },
  conatiner: {
    paddingHorizontal: wp(5),
    paddingBottom: hp(4),
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  image: {
    width: wp(90),
    height: hp(35),
    marginTop: hp(5),
    alignSelf: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
  },
  buttonContainer: {
    gap: 10,
  },
  terms: {
    color: themeColors.contentSecondary,
    fontSize: 16,
    maxWidth: wp(70),
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default preLoginStyles;
