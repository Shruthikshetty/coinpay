import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors.constants';

const paginationStyles = StyleSheet.create({
  dotStyle: {
    backgroundColor: colors.gray200,
    borderRadius: 50,
    width: 30,
  },
  activeDotStyle: {
    backgroundColor: colors.blue400,
    width: 30,
  },
  conatainer: {
    gap: 5,
    marginTop: 10,
  },
});

export default paginationStyles;
