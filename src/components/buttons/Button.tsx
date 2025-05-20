import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './button.styles';
import {colors, themeColors} from '~/common/constants/colors.constants';

// this is type safety for style prop
type CustomButtonStyles = Partial<{
  root: ViewStyle;
  label: TextStyle;
}>;

type ButtonProps = {
  square?: boolean;
  theme: 'Primary' | 'Error' | 'Info';
  label: string;
  variant?: 'Normal' | 'Border';
  handlePress: () => void;
  customStyles?: CustomButtonStyles;
  disabled?: boolean;
  //size?: 'Full' | 'Medium' | 'Small';
};

// this is diff variants of button used in app
const Button = ({
  square = false,
  theme,
  label = 'Label',
  variant = 'Normal',
  handlePress,
  customStyles,
  disabled = false,
}: ButtonProps) => {
  // function used to get the text and background color based on the theme
  const getTheme = () => {
    switch (theme) {
      case 'Primary':
        return {bgColor: themeColors.primary, textColor: themeColors.base};
      case 'Error':
        return {
          bgColor: themeColors.error,
          textColor: themeColors.contentPrimary,
        };
      case 'Info':
        return {
          bgColor: themeColors.info,
          textColor: colors.gray700,
        };
      default:
        return {bgColor: themeColors.info, textColor: colors.black};
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      style={[
        styles.root,
        square && styles.buttonSquare,
        {
          backgroundColor: disabled ? themeColors.info : getTheme().bgColor, // get color based on color
        },
        variant === 'Border' && {
          // in case the variant is Border
          borderColor: disabled ? themeColors.info : getTheme().bgColor,
          ...styles.buttonBorder,
        },
        customStyles?.root,
      ]}>
      <Text
        style={[
          styles.label,
          {color: disabled ? colors.gray700 : getTheme().textColor},
          variant === 'Border' && {
            // in case the variant is Border the text color changes
            color: disabled ? themeColors.info : getTheme().bgColor,
          },
          customStyles?.label,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
