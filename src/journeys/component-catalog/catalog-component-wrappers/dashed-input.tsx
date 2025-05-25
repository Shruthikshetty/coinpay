import {useState} from 'react';
import DashedInput from '~/components/dashed-input/DashedInput';

// default way to use
const Default = () => {
  const [value, setValue] = useState('');
  return <DashedInput value={value} setValue={setValue} />;
};

// with number pad way to use
const WithKeyboardType = () => {
  const [value, setValue] = useState('');
  return (
    <DashedInput value={value} setValue={setValue} keyboardType="number-pad" />
  );
};

// change number of Fields

const WithDiffNoOfFields = () => {
  const [value, setValue] = useState('');
  return (
    <DashedInput
      value={value}
      setValue={setValue}
      keyboardType="number-pad"
      length={4}
    />
  );
};

//export all the variations
export const DASHED_INPUT_VARIANTS = {
  Default: () => <Default />,
  WithKeyboardType: () => <WithKeyboardType />,
  WithDiffNoOfFields: () => <WithDiffNoOfFields />,
};
