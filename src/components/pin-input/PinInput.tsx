import React, {useRef, useImperativeHandle, Ref} from 'react';
import {TouchableOpacity, View, TextInput} from 'react-native';
import styles from './pin-input.styles';
import {themeColors} from '~/common/constants/colors.constants';

//types...
type PinInputProps = {
  pinLength?: number;
  pin: string;
  setPin: (value: string) => void;
  ref?: Ref<TextInput>;
  customPressAction?: () => void;
};

/*
 * this is a pin input component where the entered pin is hidden and displayed as a dot
 */
const PinInput = ({
  pinLength = 4,
  pin = '',
  ref,
  setPin = () => {},
  customPressAction,
}: PinInputProps) => {
  // Ref to control the hidden TextInput programmatically
  const inputRef = useRef<TextInput>(null);
  // extract length of entered pin
  const enteredPinLength = pin.length;

  // Focus the hidden TextInput when the box input area is pressed
  const handleBoxPress = () => {
    if (customPressAction) {
      // custom action like open custom keyboard
      customPressAction();
    } else {
      inputRef.current?.focus();
    }
  };

  // Expose the ref to parent components
  useImperativeHandle(ref, () => inputRef.current as TextInput);

  return (
    <View>
      <TouchableOpacity onPress={handleBoxPress}>
        {/* text input to hold the actual data */}
        <TextInput
          ref={inputRef}
          value={pin}
          onChangeText={setPin}
          autoFocus={false}
          keyboardType="number-pad"
          style={styles.hidden}
        />
        {/* input dots this the actual pin number is hidden */}
        <View style={styles.dotContainer}>
          {Array.from({length: pinLength}).map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index < enteredPinLength && {
                  backgroundColor: themeColors.contentPrimary,
                },
              ]}
            />
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PinInput;
