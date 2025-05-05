import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

// Define a type for named styles, which can include ViewStyle, TextStyle, or ImageStyle.
// This ensures that the styles passed to the function are valid React Native styles.
type NamedStyles = Record<string, ViewStyle | TextStyle | ImageStyle>;

/**
 * Combines default styles with optional custom styles.
 *
 * @template T - A type extending NamedStyles, representing the structure of the styles.
 * @param defaultStyles - The base styles that will always be applied.
 * @param customStyles - Optional custom styles that will override or extend the default styles.
 * @returns A new object containing the combined styles for each key.
 *
 * This function is useful for scenarios where you want to provide default styles
 * but allow customization by merging them with user-defined styles.
 */
export const getCombinedStyles = <T extends NamedStyles>(
  defaultStyles: T,
  customStyles?: Partial<{[K in keyof T]: StyleProp<T[K]>}>,
): {[K in keyof T]: StyleProp<T[K]>} => {
  // Initialize an empty object to hold the combined styles.
  const combined = {} as {[K in keyof T]: StyleProp<T[K]>};

  // Iterate over each key in the default styles.
  for (const key in defaultStyles) {
    // Use StyleSheet.compose to merge the default style with the corresponding custom style (if provided).
    combined[key] = StyleSheet.compose(defaultStyles[key], customStyles?.[key]);
  }

  // Return the combined styles object.
  return combined;
};
