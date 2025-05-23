// this file contains all the validation patterns used in the application
export const Patterns = {
  VALID_EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_NUMBER: /^[6-9]\d{9}$/, // Indian phone numbers: 10 digits, starts with 6, 7, 8, or 9
  PIN_CODE: /^\d{6}$/,
  ONLY_CHARACTERS: /^[A-Za-z]+$/,
  ONLY_CHARACTERS_AND_SPACES: /^[A-Za-z\s]+$/, // Allows only letters and spaces
};
