import {createContext, useContext} from 'react';
import {View} from 'react-native';
import styles from './radio-group.styles';

// types ..
type RadioContextType = {
  value: undefined | string;
  setValue: React.Dispatch<React.SetStateAction<undefined | string>>;
};

// types ...
type RadioGroupProps = {
  children: React.ReactNode;
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<undefined | string>>;
};

// create a context for the radio group
const RadioGroupContext = createContext<RadioContextType>(null!);

// custom hook to access the radio block context
export const useRadioGroupContext = () => {
  return useContext(RadioGroupContext);
};

const RadioGroup = ({children, value, setValue}: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider value={{value, setValue}}>
      <View style={styles.root}>{children}</View>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
