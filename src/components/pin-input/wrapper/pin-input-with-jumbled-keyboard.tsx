import React from 'react';
import {View, ViewStyle} from 'react-native';
import PinInput from '../PinInput';
import defaultStyles from './pin-input-with-keyboard.styles';
import {useModal} from '~/common/hooks/use-model';
import JumbleKeyBoard from '~/components/Jumble-keyboard/JumbleKeyboard';
import {getCombinedStyles} from '~/common/utils/combined-styles';

//types...
type CustomStylesProps = {
  root: ViewStyle;
  PinContainer: ViewStyle;
};

type PinWithJumbledBoardProps = {
  setPin: React.Dispatch<React.SetStateAction<string>>;
  pin: string;
  children?: React.ReactNode;
  customStyles?: Partial<CustomStylesProps>;
};

/**
 * component to be used in the root jsx so that the keyboard can appear at the bottom
 */
const PinWithJumbledBoard = ({
  pin,
  setPin,
  children,
  customStyles,
}: PinWithJumbledBoardProps) => {
  //get combined styles
  const styles = getCombinedStyles<CustomStylesProps>(
    defaultStyles,
    customStyles,
  );
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
      {children}
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
