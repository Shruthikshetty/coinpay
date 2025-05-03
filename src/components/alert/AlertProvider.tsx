import {createContext, useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Alert from './Alert';

// prop types from component ...
type AlertProviderProps = {
  children: React.ReactNode;
};

// all the varients the alert can have
export type AlertVarientType = 'light' | 'dark';

export type AlertThemeType = 'Secondary' | 'Error' | 'Primary' | 'Success';

// alert Context Type
type AlertContextType = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  varient: AlertVarientType;
  setVarient: React.Dispatch<React.SetStateAction<AlertVarientType>>;
  theme: AlertThemeType;
  setTheme: React.Dispatch<React.SetStateAction<AlertThemeType>>;
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
  const [varient, setVarient] = useState<AlertVarientType>('light'); // can be light or dark

  return (
    <AlertContext.Provider
      value={{message, setMessage, varient, setVarient, theme, setTheme}}>
      <View style={StyleSheet.absoluteFill}>
        {children}
        {!!message && <Alert duration={1000} />}
      </View>
    </AlertContext.Provider>
  );
};

export default AlertProvider;
