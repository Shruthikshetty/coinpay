//@TODO outside click is not calling on blur
import {Text, TextInput, View} from 'react-native';
import styles from './label-input-styles';
import {colors, themeColors} from '~/common/constants/colors.constants';
import {useState} from 'react';
import InfoCircle from '../svgs/InfoCircle';

//types for label input component ...
export type LabelInputProps = {
  label?: string;
  value: string;
  placeholder?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  handleChange: (text: string) => void;
  handleBlur?: () => void;
  handleFocus?: () => void;
  error?: boolean;
  helperText?: string;
};

// this is a recusable Input feild to be used in the app
// contains a left and right component
const LabelInput = ({
  value,
  placeholder = '',
  leftComponent,
  rightComponent,
  handleChange,
  label,
  handleBlur,
  handleFocus,
  error = false,
  helperText,
}: LabelInputProps) => {
  // this will handle state change in case there is value or setter from parent
  const [localValue, setLocalValue] = useState<string>('');
  // control focus since we need to chnge border color
  const [focus, setFocus] = useState(false);

  return (
    <View>
      {/* Render label its optional */}
      {label && <Text style={styles.label}>{label}</Text>}
      {/* outer border  */}
      <View
        style={[
          focus && styles.outerBorderActive,
          error && styles.outerBorderError,
        ]}>
        <View
          style={[
            styles.borderContainer,
            focus && {borderColor: themeColors.primary},
            error && {borderColor: themeColors.error},
          ]}>
          {/* Left component */}
          {leftComponent && (
            <View style={styles.leftComponent}>{leftComponent}</View>
          )}

          {/* Text feild */}
          <View style={styles.mainInputContainer}>
            <TextInput
              onChangeText={handleChange ?? setLocalValue}
              value={value ?? localValue}
              placeholder={placeholder}
              placeholderTextColor={colors.gray400}
              style={[styles.inputstyle, error && {color: themeColors.error}]}
              cursorColor={error ? themeColors.error : themeColors.primary}
              onFocus={() => {
                setFocus(true);
                // run and function if provided
                handleBlur?.();
              }}
              onBlur={() => {
                setFocus(false);
                // run optional function
                handleFocus?.();
              }}
            />
          </View>

          {/* Right component  */}
          {rightComponent && (
            <View style={styles.rightComponent}>{rightComponent}</View>
          )}
        </View>
      </View>
      {helperText && (
        <View style={styles.helperContainer}>
          <InfoCircle fill={error ? themeColors.error : colors.gray400} />
          <Text
            style={[styles.helperText, error && {color: themeColors.error}]}>
            {helperText}
          </Text>
        </View>
      )}
    </View>
  );
};

export default LabelInput;
