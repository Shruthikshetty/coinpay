/* eslint-disable react-native/no-inline-styles */
/**
 * This file contains catalog/demo variants of the PinInput component.
 */
import {useState} from 'react';
import {View} from 'react-native';
import PinInput from '~/components/pin-input/PinInput';
import PinWithJumbledBoard from '~/components/pin-input/wrapper/pin-input-with-jumbled-keyboard';

// default way to use pin input
const Default = () => {
  // store pin value
  const [pin, setPin] = useState('');
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <PinInput pin={pin} setPin={setPin} />
    </View>
  );
};

const WithJumbledKeyboard = () => {
  // state to store  the pin
  const [pin, setPin] = useState('');
  return (
    <View style={{height: '80%'}}>
      <PinWithJumbledBoard pin={pin} setPin={setPin} />
    </View>
  );
};
// export all variations
export const PIN_INPUT_VARIANTS = {
  Default: () => <Default />,
  WithJumbledKeyboard: () => <WithJumbledKeyboard />,
};
