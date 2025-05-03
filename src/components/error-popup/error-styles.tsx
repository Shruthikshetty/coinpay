import {StyleSheet} from 'react-native';
import {colors, themeColors} from '~/common/constants/colors.constants';
import {getOpacity} from '~/common/utils/get-opacity';

const errorPopupStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getOpacity(colors.black, 75),
  },
  errorContainer: {
    backgroundColor: colors.white,
    maxHeight: '90%',
    maxWidth: '80%',
    minWidth: '70%',
    minHeight: '20%',
    borderRadius: 25,
    padding: 20,
    elevation: 5,
  },
  title: {
    color: themeColors.error,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    paddingVertical: 5,
    textAlign: 'center',
  },
  content: {
    justifyContent: 'center',
    gap: 10,
    marginVertical: 10,
  },
  codetext: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default errorPopupStyles;
