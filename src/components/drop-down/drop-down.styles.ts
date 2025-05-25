import {StyleSheet} from 'react-native';
import {colors, themeColors} from '~/common/constants/colors.constants';

const dropDownStyles = StyleSheet.create({
  root: {},
  optionsContainer: {
    width: '100%',
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  optionsScroll: {
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    elevation: 3,
    position: 'absolute',
    zIndex: 200,
    width: '100%',
    gap: 5,
  },
  option: {
    fontSize: 16,
    color: themeColors.contentPrimary,
  },
  pressableOverlay: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 17,
    marginBottom: 7,
    color: themeColors.contentPrimary,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkContainer: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    color: colors.red500,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  textIconContainer: {
    flexDirection: 'row',
    gap: 5,
  },
});

export default dropDownStyles;
