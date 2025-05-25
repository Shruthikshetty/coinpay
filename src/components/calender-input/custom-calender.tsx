import {Modal, View} from 'react-native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import {themeColors} from '~/common/constants/colors.constants';
import Button from '../buttons/Button';
import styles from './calender.styles';
import {useModal} from '~/common/hooks/use-model';

//types...
type CalenderInputProps = {
  selectedDate: string;
  modal: ReturnType<typeof useModal>;
  buttonLabel?: string;
  setSelectedDate: (value: string) => void;
} & Omit<CalendarProps, 'markedDates' | 'onDayPress'>;

// this will open a calender and the selected value will be filled in the input field
const CustomCalender = ({
  setSelectedDate,
  selectedDate,
  modal,
  buttonLabel,
  ...restCalenderProps
}: CalenderInputProps) => {
  // this is used to set the color for selected date
  const markedDates = {
    [selectedDate]: {
      selected: true,
      selectedColor: themeColors.primary,
    },
  };

  return (
    <Modal visible={modal?.visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.root}>
          <Calendar
            onDayPress={day => {
              console.log(day?.dateString);
              setSelectedDate(day?.dateString);
            }}
            markedDates={markedDates}
            {...restCalenderProps}
          />
          <Button
            label={buttonLabel ?? 'Confirm'}
            theme="Primary"
            handlePress={() => {
              modal.hide();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomCalender;
