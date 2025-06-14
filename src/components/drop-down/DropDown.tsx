import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './drop-down.styles';
import LabelInput, {LabelInputProps} from '../label-input/LabelInput';
import {useState} from 'react';
import DownArrow from '../svgs/DownArrow';
import Check from '../svgs/Check';

//types...
export type DropDownProps<T = string> = {
  options: T[];
  label?: string;
  placeholder?: string;
  value: T | undefined | string;
  handleValue: (value: T) => void;
  renderOption?: (item: T) => string;
  error?: boolean;
  helperText?: string;
  emptyHandlerMessage?: string;
  optionsLeftIcon?: (item: T) => React.ReactNode;
} & Pick<LabelInputProps, 'disabled' | 'leftComponent'>;

//@TODO handle press outside options popup
// drop down component to select options from a array of string or a custom array of objects
const DropDown = <T,>({
  options = [],
  label,
  placeholder = '',
  handleValue,
  renderOption,
  value = '',
  error,
  helperText,
  emptyHandlerMessage = 'Sorry no options found',
  disabled,
  leftComponent,
  optionsLeftIcon,
}: DropDownProps<T>) => {
  // state to handle visibility of options
  const [optionsVisible, setOptionsVisible] = useState(false);

  // handle to select a value
  const handleOptionSelection = (option: T) => {
    // set selected value
    handleValue(option);
    // close options
    setOptionsVisible(false);
  };

  return (
    <View style={styles.root}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View>
        <TouchableOpacity
          style={styles.pressableOverlay}
          onPress={() => {
            setOptionsVisible(s => !s);
          }}
        />
        <LabelInput
          leftComponent={leftComponent}
          rightComponent={<DownArrow />}
          value={
            renderOption && Boolean(value)
              ? renderOption(value as T)
              : String(value)
          } // handle custom labels
          handleChange={() => {}} // value can not be modified from here
          placeholder={placeholder}
          helperText={helperText}
          error={error}
          disabled={disabled}
          focusable={false}
        />
      </View>
      {/* options modal */}
      <View>
        {optionsVisible && (
          <ScrollView style={styles.optionsScroll}>
            <View style={styles.optionsContainer}>
              {options && options.length ? (
                options?.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      handleOptionSelection(item);
                    }}>
                    <View style={styles.optionItem}>
                      <View style={styles.textIconContainer}>
                        {/* optional icon to add at the left of the options*/}
                        {optionsLeftIcon?.(item)}
                        <Text style={styles.option}>
                          {/*  handle custom option values */}
                          {renderOption ? renderOption(item) : String(item)}
                        </Text>
                      </View>
                      {item === value && ( // show only if selected
                        <View style={styles.checkContainer}>
                          <Check />
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.emptyMessage}>{emptyHandlerMessage}</Text>
              )}
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default DropDown;
