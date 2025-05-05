import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors.constants';

const elevatedBoxStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
});

export default elevatedBoxStyles;
