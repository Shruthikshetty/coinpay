import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors.constants';
import {getOpacity} from '~/common/utils/get-opacity';

export const screenLoaderStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: getOpacity(colors.info, 50),
  },
});
