import React, {Dispatch, SetStateAction, useMemo} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './keyboard.styles';
import {generateJumbledDigits} from '~/common/utils/jumble-digits';
import DeleteLeft from '../svgs/DeleteLeft';
import Check from '../svgs/Check';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useModal} from '~/common/hooks/use-model';

//types...
type JumbleKeyBoardProps =
  | {
      setValue: Dispatch<SetStateAction<string>>;
      value: string;
      model: ReturnType<typeof useModal>;
      inputRef?: React.RefObject<TextInput>;
      maxLength: number;
    }
  | {
      setValue: Dispatch<SetStateAction<string>>;
      value?: string;
      model: ReturnType<typeof useModal>;
      inputRef?: React.RefObject<TextInput>;
      maxLength?: undefined;
    };

// used for conditions on design
const JUMBLE_SPECIAL_KEY = {
  tick: 'tick',
  back: 'back',
};

// this is a jumble keyboard for pin entry screen with number pad
const JumbleKeyBoard = ({
  setValue,
  model,
  inputRef,
  maxLength,
  value,
}: JumbleKeyBoardProps) => {
  // the numbers are scuffled on mount
  const options = useMemo(() => {
    // get jumbled numbers
    const digits = generateJumbledDigits();
    // add the special keys
    return [
      ...digits.slice(0, 9),
      JUMBLE_SPECIAL_KEY.tick,
      digits[9],
      JUMBLE_SPECIAL_KEY.back,
    ];
  }, []);

  // this is the style used for special keys
  const getSpecialStyle = (digit: string) => {
    return digit === JUMBLE_SPECIAL_KEY.tick ||
      digit === JUMBLE_SPECIAL_KEY.back
      ? styles.specialKey
      : undefined;
  };
  if (!model.visible) {
    // in case when it has to be hidden
    return;
  }
  return (
    <View style={styles.root}>
      <View style={styles.keysContainer}>
        {options?.map((digit, index) => (
          <View style={[styles.keyBorder, getSpecialStyle(digit)]} key={index}>
            <TouchableOpacity
              style={[styles.key, getSpecialStyle(digit)]}
              onPress={() => {
                if (
                  maxLength &&
                  value &&
                  digit !== JUMBLE_SPECIAL_KEY.back &&
                  digit !== JUMBLE_SPECIAL_KEY.tick
                ) {
                  // no value is set if the maxlength is exceeded
                  if (value?.length > maxLength - 1) {
                    return;
                  }
                }
                if (digit === JUMBLE_SPECIAL_KEY.back) {
                  // remove the last char
                  setValue((s: string) => s.slice(0, -1));
                } else if (digit === JUMBLE_SPECIAL_KEY.tick) {
                  model.hide();
                  if (inputRef && inputRef.current) {
                    // trigger blur
                    inputRef.current.blur();
                  }
                } else {
                  // add the selected number
                  setValue(s => s + digit);
                }
              }}>
              {digit !== JUMBLE_SPECIAL_KEY.tick &&
              digit !== JUMBLE_SPECIAL_KEY.back ? (
                <Text style={styles.text}>{digit}</Text>
              ) : undefined}
              {/* render the back icon */}
              {digit === JUMBLE_SPECIAL_KEY.back && (
                <DeleteLeft height={hp(3)} width={wp(8)} />
              )}
              {/* render the tick */}
              {digit === JUMBLE_SPECIAL_KEY.tick && (
                <Check height={hp(3)} width={wp(8)} />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default JumbleKeyBoard;
