// this file contains all the colors used in the app
export const colors = {
  // Base colors
  white: '#FFFFFF',
  black: '#121212',

  // Blue shades
  blue50: '#EAEBFF',
  blue100: '#C9CCFF',
  blue200: '#A4ABFF',
  blue300: '#7A89FF',
  blue400: '#576CFF',
  blue500: '#304FFE',
  blue600: '#2B46F2',
  blue700: '#1E3AE5',
  blue800: '#0D2CDA',
  blue900: '#0009CA',

  // Yellow shades
  yellow50: '#FFFDE7',
  yellow100: '#FFF9C4',
  yellow200: '#FFF59D',
  yellow300: '#FEF075',
  yellow400: '#FCEB55',
  yellow500: '#FAE635',
  yellow600: '#FDD835',
  yellow700: '#FBC02D',
  yellow800: '#F9A825',
  yellow900: '#F57F17',

  // Red shades
  red50: '#FFEBEE',
  red100: '#FFCDD2',
  red200: '#EF9A9A',
  red300: '#E57373',
  red400: '#EF5350',
  red500: '#F44336',
  red600: '#E53935',
  red700: '#D32F2F',
  red800: '#C62828',
  red900: '#B71B1C',

  // Green shades
  green50: '#E8F5E9',
  green100: '#C8E6C9',
  green200: '#A5D6A7',
  green300: '#81C784',
  green400: '#66BB6B',
  green500: '#4CAF51',
  green600: '#43A048',
  green700: '#388E3D',
  green800: '#2E7D33',
  green900: '#1B5E21',

  // Orange shades
  orange50: '#FFF3E0',
  orange100: '#FFDFB2',
  orange200: '#FFCB7F',
  orange300: '#FFB64C',
  orange400: '#FFA525',
  orange500: '#FF9600',
  orange600: '#FB8A00',
  orange700: '#F57A01',
  orange800: '#EF6A01',
  orange900: '#983301',

  // Gray shades
  gray50: '#F7F7F7',
  gray100: '#E8E8E8',
  gray200: '#D0D0D0',
  gray300: '#B8B8B8',
  gray400: '#A0A0A0',
  gray500: '#898989',
  gray600: '#717171',
  gray700: '#5A5A5A',
  gray800: '#414141',
  gray900: '#2A2A2A',

  // misc
  info: '#CBCBCB',
};

// these are the theme based colors derived from the base colors
export const themeColors = {
  // Base
  base: colors.white,

  // Primary / Accent
  primary: colors.blue500,
  accent: colors.blue500,

  // Secondary
  secondary: colors.yellow600,

  // Error
  error: colors.red500,

  // Success
  success: colors.green600,

  // Warning
  warning: colors.orange600,

  // Info
  info: colors.info,

  // Background Colors
  background: colors.white,
  bgLight: colors.white,
  bgInverse: colors.black,
  bgAccent: colors.blue500,
  bgSecondary: colors.yellow600,
  bgError: colors.red500,
  bgSuccess: colors.green600,
  bgWarning: colors.orange600,

  // Background Light Variants
  bgAccentLight: colors.blue50,
  bgSecondaryLight: colors.yellow100,
  bgErrorLight: colors.red50,
  bgSuccessLight: colors.green50,
  bgWarningLight: colors.orange50,

  // Text and Icon Colors
  contentPrimary: colors.gray900,
  contentSecondary: colors.gray800,
  contentTertiary: colors.gray700,
  contentDisabled: colors.gray300,

  contentAccent: colors.blue700,
  contentSecondaryColor: colors.yellow900,

  contentError: colors.red900,
  contentSuccess: colors.green900,
  contentWarning: colors.orange900,

  contentOnColor: colors.white,
  contentOnInverse: colors.black,
};
