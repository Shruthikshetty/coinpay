import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import {colors, themeColors} from '~/common/constants/colors.constants';
import Button from '../buttons/Button';
import styles from './calender.styles';
import {useModal} from '~/common/hooks/use-model';
import AngleLeft from '../svgs/AngleLeft';
import AngleRight from '../svgs/AngleRight';
import './local-config';

// types...
type CalenderInputProps = {
  selectedDate: string; // should be in 'YYYY-MM-DD' format
  modal: ReturnType<typeof useModal>;
  buttonLabel?: string;
  setSelectedDate: (value: string) => void;
  yearSelectRange?: number[]; // should be [from 10 years back , to 10 years in future] = [10, 10]
} & Omit<
  CalendarProps,
  'markedDates' | 'onDayPress' | 'renderArrow' | 'headerStyle' | 'renderHeader'
>;

/* this is a custom calender make sure to store the date in YYYY-MM-DD format
 *used to select the date
 */
const CustomCalender = ({
  setSelectedDate,
  selectedDate,
  modal,
  buttonLabel,
  yearSelectRange = [20, 10],
  ...restCalenderProps
}: CalenderInputProps) => {
  // state to hold the visibility of date picker
  const [showYearPicker, setShowYearPicker] = useState(false);

  console.log(selectedDate);
  // setting the style for selected data
  const markedDates = {
    [selectedDate]: {
      selected: true,
      selectedColor: themeColors.primary,
    },
  };

  // function to handle the change of years
  const changeYear = (year: number) => {
    const [_, selectedM] = selectedDate.split('-');
    const newDate = `${year}-${selectedM ?? '01'}-01`; // set some defaults in case of no date selected
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
              arrowColor: colors.gray400,
              textSectionTitleColor: colors.gray500,
              textMonthFontWeight: '700',
              monthTextColor: colors.gray600,
              textMonthFontSize: 19,
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
          <Button
            label={buttonLabel ?? 'Confirm'}
            theme="Primary"
            handlePress={() => modal.hide()}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomCalender;
