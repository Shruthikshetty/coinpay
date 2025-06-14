import React from 'react';
import {View, Pressable} from 'react-native';
import LabelInput from '../label-input/LabelInput';
import CustomCalender, {CalenderCalenderProps} from './custom-calender';
import CalenderEmptyIcon from '../svgs/CalenderEmpty';
import styles from './calender-input.styles';
import moment from 'moment';
import {colors} from '~/common/constants/colors.constants';
import {getOpacity} from '~/common/utils/get-opacity';

//types..
export type CalenderInputProps = {
  placeholder?: string;
  displayDateFormat?: string;
  helperText?: string;
  error?: boolean;
  label?: string;
} & CalenderCalenderProps;

// this is a input component that opens up a calenders and the selected values show in the input field
const CalenderInput = ({
  selectedDate,
  modal,
  placeholder = 'MM/DD/YYYY',
  displayDateFormat = 'MM/DD/YYYY',
  error,
  label,
  helperText,
  ...calenderProps
}: CalenderInputProps) => {
  // state to handle visibility of the calender modal
  return (
    <View>
      <View>
        <Pressable
          style={({pressed}) => [
            styles.inputPress,
            pressed && {
              backgroundColor: getOpacity(colors.white, 30),
            },
          ]}
          onPress={() => {
            modal.show();
          }}
        />
        <LabelInput
          leftComponent={<CalenderEmptyIcon />}
          handleChange={() => {}} // it wont be editable
          value={
            selectedDate ? moment(selectedDate).format(displayDateFormat) : ''
          }
          label={label}
          placeholder={placeholder}
          helperText={helperText}
          error={error}
        />
      </View>
      <CustomCalender
        selectedDate={selectedDate}
        modal={modal}
        {...calenderProps}
      />
    </View>
  );
};

export default CalenderInput;
