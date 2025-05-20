import {useCallback, useEffect} from 'react';
import {
  AlertThemeType,
  AlertVariantType,
  useAlertContext,
} from '~/components/alert/AlertProvider';

/**
 * Custom hook to trigger and configure alerts in the app.
 *
 * @param variant Alert variant (e.g. 'light' or 'dark')
 * @param theme Alert theme (e.g. 'Error', 'Success')
 * @returns { alert, reset } - Functions to trigger and clear alerts
 */
export const useAlert = (
  theme?: AlertThemeType,
  variant?: AlertVariantType,
  duration?: number,
) => {
  // get all the  setters from context
  const {setMessage, setVariant, setTheme, setDuration} = useAlertContext();

  // change the theme or variant based on the props provided
  useEffect(() => {
    if (variant) {
      // just in case to prevent redundant updates we check with prev state
      setVariant(prev => (prev !== variant ? variant : prev));
    }
    if (theme) {
      setTheme(prev => (prev !== theme ? theme : prev));
    }
    // optionally change duration if required
    if (duration) {
      setDuration(duration);
    }
  }, [variant, theme, setVariant, setTheme, duration, setDuration]);

  /**
   * this is used to call the alert on the screen
   * provide the message as a prop
   * @param message string
   */
  const alert = useCallback(
    (message: string) => {
      if (message) {
        setMessage(message);
      }
    },
    [setMessage],
  );

  // used to reset the message and clear alert
  const reset = useCallback(() => {
    setMessage('');
  }, [setMessage]); // this hook can be used in case we need to close a alert before the timer runs out

  // this function is used to change all the properts of a Alert
  const changeAlert = useCallback(
    (
      messages: string,
      newTheme: AlertThemeType,
      newVariant: AlertVariantType,
    ) => {
      setVariant(newVariant);
      setTheme(newTheme);
      setMessage(messages);
    },
    [setMessage, setTheme, setVariant],
  );

  return {alert, reset, changeAlert};
};
