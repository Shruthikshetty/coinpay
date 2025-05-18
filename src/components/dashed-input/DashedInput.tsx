import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardTypeOptions,
} from 'react-native';
import styles from './dashed-input.styles';

//types...
type DashedInputType = {
  value: string;
  setValue: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  length?: number; // The fixed length of the input (number of boxes)
};

//@TODO this component has to be modified
/**
 * DashedInput is a custom input component for entering a fixed-length numeric code (e.g., OTP).
 * It displays a row of boxes, each representing a digit, with a blinking cursor in the active box.
 */
const DashedInput = ({
  value = '',
  setValue = () => {},
  keyboardType = 'number-pad',
  length = 6,
}: DashedInputType) => {
  // State to track if the input is focused
  const [isFocused, setIsFocused] = useState(false);
  // Ref to control the hidden TextInput programmatically
  const inputRef = useRef<TextInput>(null);

  // Split the value into individual characters for rendering
  const chars = value.split('');

  // Focus the hidden TextInput when any box is pressed
  const handleBoxPress = () => {
    inputRef.current?.focus();
  };

  return (
    // TouchableOpacity wraps the whole input to allow focusing on press
    <TouchableOpacity activeOpacity={1} onPress={handleBoxPress}>
      <View style={styles.container}>
        {/* Hidden TextInput to capture user input */}
        <TextInput
          ref={inputRef}
          value={value}
          // Only allow numeric input and limit to 'length' digits
          onChangeText={setValue}
          maxLength={length}
          keyboardType={keyboardType}
          style={styles.hiddenInput} // Hide the actual input field
          autoFocus={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {/* Render boxes for each digit */}
        {[...Array(length)].map((_, i) => (
          <View key={i} style={styles.box}>
            {chars[i] ? (
              // Show the digit if entered
              <Text style={styles.charText}>{chars[i]}</Text>
            ) : value.length === i && isFocused ? (
              // Show a blinking cursor if this is the current box and input is focused
              <Text style={[styles.charText, styles.cursor]}>|</Text>
            ) : (
              // Otherwise, show an empty box
              <Text style={styles.charText}>{''}</Text>
            )}
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default DashedInput;
