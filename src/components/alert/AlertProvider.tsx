import {createContext, useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Alert from './Alert';

// prop types from component ...
type AlertProviderProps = {
  children: React.ReactNode;
};

// all the variants the alert can have
export type AlertVariantType = 'light' | 'dark';

export type AlertThemeType = 'Secondary' | 'Error' | 'Primary' | 'Success';

// alert Context Type
type AlertContextType = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  variant: AlertVariantType;
  setVariant: React.Dispatch<React.SetStateAction<AlertVariantType>>;
  theme: AlertThemeType;
  setTheme: React.Dispatch<React.SetStateAction<AlertThemeType>>;
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
};

// creating alert context to store the visible state
const AlertContext = createContext<AlertContextType>(null!);
// export a custom context hook to access the alert context
export const useAlertContext = () => useContext(AlertContext);

//@TODO make alerts as queue
// this is a provider that stores the setters for alert so that it can be accessed globally
const AlertProvider = ({children}: AlertProviderProps) => {
  const [message, setMessage] = useState(''); // store the alert message
  const [theme, setTheme] = useState<AlertThemeType>('Primary'); // set the theme it can be Success Error Primary or Secondary
  const [variant, setVariant] = useState<AlertVariantType>('light'); // can be light or dark
  const [duration, setDuration] = useState(1000);

  return (
    <AlertContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        theme,
        setTheme,
        duration,
        setDuration,
      }}>
      <View style={StyleSheet.absoluteFill}>
        {children}
        {!!message && <Alert duration={duration} />}
      </View>
    </AlertContext.Provider>
  );
};

export default AlertProvider;
