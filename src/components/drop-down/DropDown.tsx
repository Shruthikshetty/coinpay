import {Text, TouchableOpacity, View} from 'react-native';
import styles from './drop-down.styles';
import LabelInput from '../label-input/LabelInput';
import {useState} from 'react';
import DownArrow from '../svgs/DownArrow';
import Check from '../svgs/Check';

//types...
type DropDownProps<T = string> = {
  options: T[];
  label?: string;
  placeholder?: string;
  value: T;
  handleValue: (value: T) => void;
  renderOption?: (item: T) => string;
};

//@TODO handle press outside options popup
//@TODO yet to add props for error etc ...
// drop down component to select options from a array of string
const DropDown = <T,>({
  options = [],
  label,
  placeholder = '',
  handleValue,
  renderOption,
  value,
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
            if (!optionsVisible) {
              setOptionsVisible(true);
            } else {
              setOptionsVisible(false);
            }
          }}
        />
        <LabelInput
          rightComponent={<DownArrow />}
          value={renderOption ? renderOption(value) : String(value)} // handle custom labels
          handleChange={() => {}} // value can not be modified from here
          placeholder={placeholder}
        />
      </View>
      {/* options modal */}
      <View>
        {optionsVisible && (
          <View style={styles.optionsContainer}>
            {options.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handleOptionSelection(item);
                }}>
                <View style={styles.optionItem}>
                  <Text style={styles.option}>
                    {/*  handle custom option values */}
                    {renderOption ? renderOption(item) : String(item)}
                  </Text>
                  {item === value && ( // show only if selected
                    <View style={styles.checkContainer}>
                      <Check />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default DropDown;
