import {useState} from 'react';
import {useModal} from '~/common/hooks/use-model';
import CalenderInput from '~/components/calender-input/calender-input';

// default way of using Calender Input
const Default = () => {
  // state to store date
  const [date, setDate] = useState('');
  // state to handle the model ,
  const model = useModal();
  return (
    <CalenderInput
      selectedDate={date}
      setSelectedDate={setDate}
      modal={model}
    />
  );
};

// export all variations
export const CALENDER_INPUT_VARIANTS = {
  Default: () => <Default />,
};
