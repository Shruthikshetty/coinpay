import {StyleSheet} from 'react-native';
import {colors, themeColors} from '~/common/constants/colors.constants';
import {getOpacity} from '~/common/utils/get-opacity';

const labelInputStyles = StyleSheet.create({
  borderContainer: {
    borderWidth: 1.2,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
    borderColor: themeColors.contentDisabled,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  leftComponent: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightComponent: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainInputContainer: {
    flex: 14,
  },
  inputStyle: {
    color: themeColors.contentPrimary,
    fontSize: 16,
    paddingLeft: 0,
  },
  inputDisabled: {
    backgroundColor: colors.gray200,
    borderRadius: 10,
  },
  label: {
    fontSize: 17,
    marginBottom: 7,
    color: themeColors.contentPrimary,
  },
  outerBorderActive: {
    borderRadius: 10,
    outlineWidth: 3,
    outlineColor: getOpacity(colors.blue100, 80),
  },
  outerBorderError: {
    borderRadius: 10,
    outlineWidth: 3,
    outlineColor: getOpacity(colors.red100, 80),
  },
  helperText: {
    color: colors.gray400,
    fontSize: 13,
  },
  helperContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginTop: 5,
  },
});

export default labelInputStyles;
