import React from 'react';
import {View} from 'react-native';
import PinInput from '../PinInput';
import styles from './pin-input-with-keyboard.styles';
import {useModal} from '~/common/hooks/use-model';
import JumbleKeyBoard from '~/components/Jumble-keyboard/JumbleKeyboard';

//types...
type PinWithJumbledBoardProps = {
  setPin: React.Dispatch<React.SetStateAction<string>>;
  pin: string;
};

/**
 * component to be used in the root jsx so that the keyboard can appear at the bottom
 */
const PinWithJumbledBoard = ({pin, setPin}: PinWithJumbledBoardProps) => {
  //jumbled keyboard state
  const keyboardModal = useModal();
  return (
    <View style={styles.root}>
      <View style={styles.PinContainer}>
        <PinInput
          pin={pin}
          setPin={() => {}} // can not be set directly
          customPressAction={() => keyboardModal.show()}
        />
      </View>
      <JumbleKeyBoard
        setValue={setPin}
        model={keyboardModal}
        maxLength={4}
        value={pin}
      />
    </View>
  );
};

export default PinWithJumbledBoard;
