import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import {colors} from '~/common/constants/colors.constants';

/**
 * Custom shimmer loader to be used in the app
 */
const ShimmerLoader = ({
  ...shimmertypes
}: React.ComponentProps<typeof ShimmerPlaceHolder>) => {
  return (
    <ShimmerPlaceHolder
      duration={2000}
      LinearGradient={LinearGradient}
      shimmerColors={[colors.gray200, colors.gray300, colors.gray400]}
      {...shimmertypes}
    />
  );
};

export default ShimmerLoader;
