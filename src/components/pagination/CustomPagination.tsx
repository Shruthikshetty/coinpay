import React from 'react';
import {Pagination} from 'react-native-reanimated-carousel';
import styles from './pagination.styles';
import {Extrapolation, interpolate} from 'react-native-reanimated';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

/**
 * A wrapper component for `Pagination.Basic` that customizes dot and container styles
 * according to the app's design requirements.
 *
 * @param prpos - Props passed down to the underlying `Pagination.Basic` component.
 * @returns The styled pagination component.
 */
const CustomPagination = ({
  ...prpos
}: React.ComponentProps<typeof Pagination.Custom>) => {
  return (
    <Pagination.Custom
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      customReanimatedStyle={(progress, index) => {
        // Interpolate width: active dot = 8, inactive = 16 (adjust as needed)
        const width = interpolate(
          Math.abs(progress - index),
          [0, 1],
          [wp(5), wp(10)], // 5 for active, 10 for inactive
          Extrapolation.CLAMP,
        );
        return {
          width,
        };
      }}
      containerStyle={styles.conatainer}
      {...prpos}
    />
  );
};

export default CustomPagination;
