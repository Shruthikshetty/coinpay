/**
 * Generates an array of jumbled (randomly shuffled) digit strings.
 *
 * @param length - The number of digits to generate and jumble. Defaults to 10.
 * @returns An array of digit strings, shuffled in random order.
 *
 * @example
 * // Returns an array like ['3', '1', '7', '0', '9', '2', '8', '5', '4', '6']
 * generateJumbledDigits(10);
 */
export const generateJumbledDigits = (length = 10) => {
  const digits = Array.from({length: length}, (_, index) => index.toString());
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [digits[i], digits[j]] = [digits[j], digits[i]];
  }
  return digits;
};
