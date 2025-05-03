import {StyleSheet} from 'react-native';
import {themeColors} from '~/common/constants/colors.constants';

const componentcatalogscreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: themeColors.contentPrimary,
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: 10,
  },
  componentContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default componentcatalogscreenStyles;
