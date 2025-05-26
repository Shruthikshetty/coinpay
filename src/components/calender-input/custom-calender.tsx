import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import {colors, themeColors} from '~/common/constants/colors.constants';
import Button, {ButtonProps} from '../buttons/Button';
import defaultStyles from './calender.styles';
import {useModal} from '~/common/hooks/use-model';
import AngleLeft from '../svgs/AngleLeft';
import AngleRight from '../svgs/AngleRight';
import './local-config';
import {getCombinedStyles} from '~/common/utils/combined-styles';

// types...
type CalendarInputStylesType = {
  root: ViewStyle;
  modalContainer: ViewStyle;
  headerStyle: ViewStyle;
  yearPickerContainer: ViewStyle;
  yearPicker: ViewStyle;
  yearItem: ViewStyle;
  yearText: TextStyle;
  headerTitle: TextStyle;
  separator: ViewStyle;
};

type CalenderInputProps = {
  selectedDate: string; // should be in 'YYYY-MM-DD' format
  modal: ReturnType<typeof useModal>;
  setSelectedDate: (value: string) => void;
  yearSelectRange?: number[]; // should be [from 10 years back , to 10 years in future] = [10, 10]
  buttonProps?: Omit<ButtonProps, 'handlePress'>;
  customStyles?: Partial<CalendarInputStylesType>;
} & Omit<
  CalendarProps,
  'markedDates' | 'onDayPress' | 'renderArrow' | 'headerStyle' | 'renderHeader'
>;

/**
 * CustomCalender is a reusable calendar component for React Native, designed to allow users to select a date
 * in 'YYYY-MM-DD' format. It features a modal-based UI, a custom year picker, and customizable calendar props.
 *
 * ## Props
 * @param {string} selectedDate - The currently selected date in 'YYYY-MM-DD' format.
 * @param {ReturnType<typeof useModal>} modal - Modal control object from the `useModal` hook, used to manage visibility.
 * @param {string} [buttonLabel] - Optional label for the confirm button (defaults to 'Confirm').
 * @param {(value: string) => void} setSelectedDate - Callback to update the selected date.
 * @param {number[]} [yearSelectRange] - Optional range for year selection as [yearsBack, yearsForward] (defaults to [20, 10]).
 * @param {Omit<CalendarProps, 'markedDates' | 'onDayPress' | 'renderArrow' | 'headerStyle' | 'renderHeader'>} restCalenderProps - Additional props passed to the underlying Calendar component, excluding certain overridden props.
 *
 * ## Usage
 * ```tsx
 * <CustomCalender
 *   selectedDate={selectedDate}
 *   setSelectedDate={setSelectedDate}
 *   modal={modal}
 *   buttonLabel="Select Date"
 *   yearSelectRange={[10, 10]}
 * />
 * ```
 *
 * @remarks
 * - The component expects the date to be stored and managed in 'YYYY-MM-DD' format.
 * - The year picker allows users to quickly jump to a specific year within the defined range.
 *
 * @component
 */
const CustomCalender = ({
  setSelectedDate,
  selectedDate,
  modal,
  yearSelectRange = [20, 10],
  buttonProps = {
    label: 'Confirm',
    theme: 'Primary',
  },
  customStyles,
  ...restCalenderProps
}: CalenderInputProps) => {
  // state to hold the visibility of date picker
  const [showYearPicker, setShowYearPicker] = useState(false);

  // combine the default and provided custom styles
  const styles = getCombinedStyles<CalendarInputStylesType>(
    defaultStyles,
    customStyles,
  );

  // setting the style for selected data
  const markedDates = {
    [selectedDate]: {
      selected: true,
      selectedColor: themeColors.primary,
    },
  };

  //@TODO the default selected date can be an issue in case of min and max date
  // function to handle the change of years
  const changeYear = (year: number) => {
    const [_, selectedM, selectedDay] = selectedDate.split('-');
    const newDate = `${year}-${selectedM ?? '01'}-${selectedDay ?? '01'}`; // set some defaults in case of no date selected
    setSelectedDate(newDate);
    setShowYearPicker(false);
  };

  // this is a function to render the header part of the calender
  const renderHeader = (date: any) => {
    const month = date.toString('MMMM'); // convert to MMMM format
    const year = date.toString('yyyy'); // convert to YYYY format

    return (
      <TouchableOpacity onPress={() => setShowYearPicker(true)}>
        <Text style={styles.headerTitle}>
          {month} {year}
        </Text>
      </TouchableOpacity>
    );
  };

  // line to separate each year
  const renderSeparator = () => <View style={styles.separator} />;

  // render a year picker on click of the header title
  const renderYearPicker = () => {
    const currentYear = new Date().getFullYear();
    const [from, to] = yearSelectRange;
    // get array of years
    const years = Array.from(
      {length: from + to + 1},
      (_, i) => currentYear - from + i,
    ).reverse();

    return (
      <Modal transparent visible={showYearPicker} animationType="fade">
        <View style={styles.yearPickerContainer}>
          <View style={styles.yearPicker}>
            <FlatList
              data={years}
              ItemSeparatorComponent={renderSeparator}
              keyExtractor={item => item.toString()}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => changeYear(item)}
                  style={({pressed}) => [
                    styles.yearItem,
                    pressed && {backgroundColor: colors.blue50},
                  ]}>
                  <Text style={[styles.yearText]}>{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <Modal visible={modal?.visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.root}>
          {renderYearPicker()}
          <Calendar
            key={selectedDate.split('-')[0]} // force rerender on change of year
            current={selectedDate}
            onDayPress={day => {
              setSelectedDate(day?.dateString);
            }}
            theme={{
              textDayHeaderFontWeight: '700',
              textSectionTitleColor: colors.gray500,
            }}
            renderArrow={direction => {
              switch (direction) {
                case 'left':
                  return <AngleLeft />;
                case 'right':
                  return <AngleRight />;
              }
            }}
            renderHeader={renderHeader}
            headerStyle={styles.headerStyle}
            markedDates={markedDates}
            {...restCalenderProps}
          />
          <Button handlePress={() => modal.hide()} {...buttonProps} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomCalender;
