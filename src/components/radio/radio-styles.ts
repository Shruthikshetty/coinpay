import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors.constants';

const radioStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  selected: {
    backgroundColor: colors.blue500,
    borderRadius: 10, // have same radius
    paddingBottom: 3,
    elevation: 5,
  },
  imageFrame: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  dotContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    color: colors.gray700,
    fontWeight: 'bold',
  },
  subTitle: {
    textAlign: 'left',
    color: colors.gray700,
    fontWeight: '400',
  },
});

export const radioDotStyles = StyleSheet.create({
  dotBorder: {
    borderWidth: 2,
    borderColor: colors.blue500,
    width: 20,
    height: 20,
    padding: 2,
    borderRadius: 13,
  },
  activeDot: {
    backgroundColor: colors.blue500,
    flex: 1,
    borderRadius: 13,
  },
});

export default radioStyles;
