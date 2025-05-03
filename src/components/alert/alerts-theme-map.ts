import {colors, themeColors} from '~/common/constants/colors.constants';

// color theme mapping for the component
export const ALERT_THEME_MAP = {
  Error: {light: colors.red50, dark: themeColors.error},
  Secondary: {light: colors.yellow50, dark: themeColors.secondary},
  Success: {light: colors.green50, dark: themeColors.success},
  Primary: {light: colors.blue50, dark: themeColors.primary}, // default case
};
