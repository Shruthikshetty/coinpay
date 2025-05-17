import {View, Text} from 'react-native';
import styles from './index.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '~/components/buttons/Button';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import ShimmerLoader from '~/components/loaders/ShimmerLoader';
import {ONBOARDING_CAROUSAL_CONTENT} from '~/common/constants/screen.constants';
import {useSharedValue} from 'react-native-reanimated';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Route} from '~/common/constants/navigation.constants';
import CustomPagination from '~/components/pagination/CustomPagination';

/**
 * This is onboarding screen this screen will only shown when the app is opend for the first time
 */
const Onboarding = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  // this hold's the currect image and info shown
  const progress = useSharedValue<number>(0);
  // ref for the carousal component
  const ref = React.useRef<ICarouselInstance>(null);
  // used to sroll the contants of carousal to the required position on press of pagination dot
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {loading && <ShimmerLoader style={styles.loader} />}
        <View>
          <Carousel
            ref={ref}
            onProgressChange={progress}
            width={wp(90)}
            height={loading ? 1 : hp(55)}
            data={ONBOARDING_CAROUSAL_CONTENT}
            autoPlay
            autoPlayInterval={2000}
            renderItem={({item}) => (
              <View style={styles.carousalContentContainer}>
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
          <View style={styles.paginationConatiner}>
            {!loading && (
              <CustomPagination
                progress={progress}
                data={ONBOARDING_CAROUSAL_CONTENT}
                onPress={onPressPagination}
              />
            )}
          </View>
        </View>
      </View>
      <Button
        handlePress={() => {
          navigation.navigate(Route.PRE_LOGIN);
        }}
        label="Next"
        theme="Primary"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
