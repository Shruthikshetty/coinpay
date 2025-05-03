import {StyleSheet} from 'react-native';
import {colors, themeColors} from '~/common/constants/colors.constants';

const dropDownStyles = StyleSheet.create({
  root: {},
  optionsContainer: {
    marginTop: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
});

export default dropDownStyles;
