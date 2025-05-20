import {StyleSheet} from 'react-native';
import {themeColors} from '~/common/constants/colors.constants';

const internationalizationExampleStyles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  header: {
    fontSize: 25,
    color: themeColors.contentPrimary,
    textAlign: 'center',
  },
  dropDownContainer: {
    marginVertical: 20,
  },
  contentContainer: {
    marginTop: 20,
    marginBlock: 10,
    padding: 5,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default internationalizationExampleStyles;
