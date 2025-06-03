import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './progress-item.styles';
import {colors} from '~/common/constants/colors.constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Check from '../svgs/Check';

//types....
type ProgressItemProps = {
  text: string;
  itemNumber: number;
  isLoading: boolean;
};

const ProgressItem = ({
  text = 'text....',
  isLoading = true,
  itemNumber = 0,
}: ProgressItemProps) => {
  return (
    <View style={styles.progressItemRoot}>
      {/* Item number */}
      <View style={styles.itemNumberContainer}>
        <Text style={styles.itemText}>{itemNumber}</Text>
      </View>
      {/* item name */}
      <Text style={styles.itemText}>{text}</Text>
      <View>
        {isLoading ? (
          <ActivityIndicator color={colors.blue500} size={wp(7)} />
        ) : (
          <View style={styles.tickContainer}>
            <Check fill={colors.white} />
          </View>
        )}
      </View>
    </View>
  );
};

export default ProgressItem;
