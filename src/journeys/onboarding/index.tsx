import {View, Text} from 'react-native';
import styles from './index.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '~/components/buttons/Button';
import OnboardingImg1 from '~/components/svgs/OnboardingImg1';
import Onboardingimg2 from '~/components/svgs/OnboardingImg2';
import Onboardingimg3 from '~/components/svgs/OnboardingImg3';
import Carousel from 'react-native-reanimated-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '~/common/constants/colors.constants';
import ShimmerLoader from '~/components/loaders/ShimmerLoader';

const ONBOARDING_CAROUSAL_CONTENT = [
  {
    img: OnboardingImg1,
    message: 'Trusted by millions of people , part of one',
  },
  {
    img: Onboardingimg2,
    message: 'Spend money abroad , and track your expense',
  },
  {
    img: Onboardingimg3,
    message: 'Receive money from anywhere in the world',
  },
];

/**
 * This is onboarding screen this screen will only shown when the app is opend for the first time
 */
const Onboarding = () => {
  const [loading, setLoading] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {loading && <ShimmerLoader style={styles.loader} />}
        <Carousel
          width={wp(90)}
          height={hp(60)}
          data={ONBOARDING_CAROUSAL_CONTENT}
          renderItem={({item}) => (
            <View>
               {loading && <ShimmerLoader style={styles.loader} />}
              <item.img
                width={styles.image.width}
                height={styles.image.height}
                style={styles.image}
                onLayout={() => setLoading(false)}
              />
              <Text style={styles.message}>{item.message}</Text>
            </View>
          )}
        />
      </View>
      <Button handlePress={() => {}} label="Next" theme="Primary" />
    </SafeAreaView>
  );
};

export default Onboarding;
