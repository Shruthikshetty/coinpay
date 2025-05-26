import {Modal, View} from 'react-native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import {colors, themeColors} from '~/common/constants/colors.constants';
import Button from '../buttons/Button';
import styles from './calender.styles';
import {useModal} from '~/common/hooks/use-model';
import AngleLeft from '../svgs/AngleLeft';
import AngleRight from '../svgs/AngleRight';
import './local-config'; // importing our config set up

//types...
type CalenderInputProps = {
  selectedDate: string;
  modal: ReturnType<typeof useModal>;
  buttonLabel?: string;
  setSelectedDate: (value: string) => void;
} & Omit<
  CalendarProps,
  'markedDates' | 'onDayPress' | 'renderArrow' | 'headerStyle'
>;

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
            headerStyle={styles.headerStyle}
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
