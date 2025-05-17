import React from 'react';
import {Pagination} from 'react-native-reanimated-carousel';
import styles from './pagination.styles';


/**
 * A wrapper component for `Pagination.Basic` that customizes dot and container styles
 * according to the app's design requirements.
 *
 * @param prpos - Props passed down to the underlying `Pagination.Basic` component.
 * @returns The styled pagination component.
 */
const CustomPagination = ({
  ...prpos
}: React.ComponentProps<typeof Pagination.Basic>) => {
  return (
    <Pagination.Basic
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      containerStyle={styles.conatainer}
      {...prpos}
    />
  );
};

export default CustomPagination;
