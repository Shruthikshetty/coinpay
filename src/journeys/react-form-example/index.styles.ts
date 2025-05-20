import {StyleSheet} from 'react-native';
import {themeColors} from '~/common/constants/colors.constants';

const reactFormExampleStyles = StyleSheet.create({
  container: {flex: 1},
  title: {
    color: themeColors.contentPrimary,
    textAlign: 'center',
    fontSize: 20,
  },
  formContainer: {
    padding: 10,
    gap: 10,
  },
  buttonRoot: {
    marginTop: 20,
  },
});

export default reactFormExampleStyles;
