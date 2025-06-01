/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import {useState} from 'react';
import {colors} from '~/common/constants/colors.constants';
import {useModal} from '~/common/hooks/use-model';
import CustomCalender from '~/components/calender-input/custom-calender';

// default way to use Calendar input
const Default = () => {
  // state to store the selected date value
  const [selectedDate, setSelectedDate] = useState('');
  // use custom hook to manage calender modal
  const modal = useModal(true);

  return (
    <CustomCalender
      modal={modal}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};

const WithRandomProps = () => {
  // state to store the selected date value
  const [selectedDate, setSelectedDate] = useState('');
  // use custom hook to manage calender modal
  const modal = useModal(true);

  // get today's date in YYYY-MM-DD format
  const today = moment().format('YYYY-MM-DD');
  // date before 20 years
  const twentyYearsAgo = moment().subtract(20, 'years').format('YYYY-MM-DD');
  return (
    <CustomCalender
      modal={modal}
      maxDate={today} // no dates after today can be selected
      minDate={twentyYearsAgo} // date before 20 years can not be selected
      yearSelectRange={[20, 0]}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      buttonProps={{
        label: 'Done',
        theme: 'Primary',
        square: true,
      }}
      theme={{
        dayTextColor: 'red',
        textDayHeaderFontSize: 20,
        textDayHeaderFontWeight: '500',
      }}
      style={{
        borderColor: 'blue',
        borderWidth: 2,
      }}
      customStyles={{
        root: {
          backgroundColor: colors.gray200,
          borderRadius: 0,
        },
        headerTitle: {
          color: colors.blue500,
        },
      }}
    />
  );
};

// export all the variations
export const CALENDAR_VARIANTS = {
  Default: () => <Default />,
  WithRandomProps: () => <WithRandomProps />,
};
