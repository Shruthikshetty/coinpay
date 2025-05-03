import {useCallback, useEffect} from 'react';
import {
  AlertThemeType,
  AlertVarientType,
  useAlertContext,
} from '~/components/alert/AlertProvider';

/**
 * Custom hook to trigger and configure alerts in the app.
 *
 * @param varient Alert variant (e.g. 'light' or 'dark')
 * @param theme Alert theme (e.g. 'Error', 'Success')
 * @returns { alert, reset } - Functions to trigger and clear alerts
 */
export const useAlert = (
  theme?: AlertThemeType,
  varient?: AlertVarientType,
) => {
  // get all the  setters from context
  const {setMessage, setVarient, setTheme} = useAlertContext();

  // change the theme or varient based on the props provided
  useEffect(() => {
    if (varient) {
      // just in case to prevent redundant updates we check with prev state
      setVarient(prev => (prev !== varient ? varient : prev));
    }
    if (theme) {
      setTheme(prev => (prev !== theme ? theme : prev));
    }
  }, [varient, theme, setVarient, setTheme]);

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
      newVarient: AlertVarientType,
    ) => {
      setVarient(newVarient);
      setTheme(newTheme);
      setMessage(messages);
    },
    [setMessage, setTheme, setVarient],
  );

  return {alert, reset, changeAlert};
};
