import {
  Keyboard,
  KeyboardTypeOptions,
  Text,
  TextInput,
  View,
} from 'react-native';
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
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  disabled?: boolean;
  autoCorrect?: boolean;
  spellCheck?: boolean;
  inputRef?: React.Ref<TextInput> | undefined;
  focusable?: boolean;
};

// this is a reusable Input field to be used in the app
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
  keyboardType,
  secureTextEntry,
  disabled = false,
  autoCorrect = false,
  spellCheck = false,
  focusable = true,
  inputRef,
}: LabelInputProps) => {
  // this will handle state change in case there is value or setter from parent
  const [localValue, setLocalValue] = useState<string>('');
  // control focus since we need to change border color
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
          disabled && styles.inputDisabled,
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

          {/* Text field */}
          <View style={[styles.mainInputContainer]}>
            <TextInput
              onSubmitEditing={Keyboard.dismiss} // dismiss keyboard on done or enter
              ref={inputRef}
              keyboardType={keyboardType ?? 'default'}
              onChangeText={handleChange ?? setLocalValue}
              value={value ?? localValue}
              placeholder={placeholder}
              placeholderTextColor={colors.gray400}
              style={[styles.inputStyle, error && {color: themeColors.error}]}
              cursorColor={error ? themeColors.error : themeColors.primary}
              secureTextEntry={secureTextEntry} // This will mask the input like a password
              autoCorrect={autoCorrect} // Disable auto correct by default
              spellCheck={spellCheck} // (Android only)
              focusable={focusable}
              onFocus={() => {
                // handling focus effect
                setFocus(true);
                // custom function to run if given
                handleFocus?.();
              }}
              editable={!disabled}
              onBlur={() => {
                // handling blur effect
                setFocus(false);
                // custom function to run if given
                handleBlur?.();
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
