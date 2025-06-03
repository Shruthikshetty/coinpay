/* eslint-disable react-native/no-inline-styles */
import {useEffect, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useModal} from '~/common/hooks/use-model';
import JumbleKeyBoard from '~/components/Jumble-keyboard/JumbleKeyboard';

// default way to use  Jumbled keyboard
const Default = () => {
  const [value, setValue] = useState('');
  const model = useModal(true);

  // focused state
  const [focused, setFocused] = useState(false);

  // ref for the input
  const ref = useRef<TextInput>(null!);

  // open the keyboard on focus
  useEffect(() => {
    if (focused) {
      model.show();
    }
    if (model.visible) {
      ref.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  //NOTE: - the pointer may not work because the  this component is not expected to be used this way
  return (
    <View style={{height: heightPercentageToDP(50)}}>
      <TextInput
        ref={ref}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => setFocused(false)}
        value={value}
        style={{borderWidth: 1, padding: 10, margin: 10}}
        placeholder="Pin"
      />
      <JumbleKeyBoard setValue={setValue} model={model} inputRef={ref} />
    </View>
  );
};

// export all variations
export const JUMBLE_KEYBOARD_VARIANTS = {
  Default: () => <Default />,
};
