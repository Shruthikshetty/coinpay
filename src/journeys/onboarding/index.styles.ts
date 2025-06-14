import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  message: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  contentContainer: {
    justifyContent: 'space-between',
    paddingTop: hp(10),
  },
  image: {
    alignSelf: 'center',
    width: wp(70),
    padding: wp(10),
    marginBottom: hp(4),
    height: hp(35),
  },
  loader: {
    borderRadius: 15,
    width: wp(90),
    height: hp(50),
  },
  carousalContentContainer: {
    gap: hp(5),
  },
  paginationContainer: {
    position: 'absolute',
    bottom: hp(13),
    alignSelf: 'center',
  },
});

export default onboardingStyles;
