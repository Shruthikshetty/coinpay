import {useState} from 'react';
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

// export all the variations
export const CALENDAR_INPUT_VARIANTS = {
  Default: () => <Default />,
};
