import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
    paddingTop: 100,
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
});

export default onboardingStyles;
