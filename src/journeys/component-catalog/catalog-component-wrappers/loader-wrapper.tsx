import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ScreenLoader from '~/components/loaders/ScreenLoader';
import ShimmerLoader from '~/components/loaders/ShimmerLoader';

// default way to use Screen loader
const ScreenLoaderDefault = () => {
  // state to handle loading
  const [loading, setLoading] = useState(true);

  // simulate it to off after some time
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <ScreenLoader loading={loading} />;
};

// styles for demo in this file
const styles = StyleSheet.create({
  shimmerGap: {
    gap: hp(2),
  },
  rounded: {
    width: wp(10),
    borderRadius: wp(5),
    height: wp(10),
  },
  curvedBar: {
    width: wp(10),
    borderRadius: wp(5),
    height: hp(2),
  },
  square: {
    width: 100,
    height: 100,
  },
});

const DefaultShimmerLoader = () => {
  return (
    <View style={styles.shimmerGap}>
      <ShimmerLoader width={wp(70)} height={hp(2)} />
      <ShimmerLoader style={styles.rounded} />
      <ShimmerLoader style={styles.curvedBar} />
      <ShimmerLoader style={styles.square} />
    </View>
  );
};

// export all the variants of Loader
export const LOADER_VARIANTS = {
  ScreenLoader: () => <ScreenLoaderDefault />,
  ShimmerLoader: () => <DefaultShimmerLoader />,
};
