import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '~/common/constants/colors.constants';
import {screenLoaderStyles as styles} from './loaders.styles';

//types...
type ScreenLoaderType = {
  loading: boolean;
  color?: string;
  size?: number;
};

// Loader that apply's to the full screen preventing any actions on the screen
const ScreenLoader = ({
  loading = true,
  color = colors.blue500,
  size = wp(15),
}: ScreenLoaderType) => {
  return (
    <Modal visible={loading} transparent>
      <View style={styles.root}>
        <ActivityIndicator size={size} color={color} />
      </View>
    </Modal>
  );
};

export default ScreenLoader;
