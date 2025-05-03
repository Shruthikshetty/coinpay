import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors.constants';

const queryexampleStyles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 10},
  header: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  purposeInfoContainer: {
    paddingLeft: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default queryexampleStyles;
