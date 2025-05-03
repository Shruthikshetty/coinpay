/**
 * contains all the varient of the label input componnet
 * and how to used them ...
 */
import {useState} from 'react';
import LabelInput from '~/components/label-input/LabelInput';
import EnvelopeIcon from '~/components/svgs/EnvelopeIcon';
import Eye from '~/components/svgs/Eye';

// Default way to use Label input component
const LabelInputDefault = () => {
  const [value, setValue] = useState('value');
  return <LabelInput value={value} handleChange={setValue} />;
};

// label input with place holder
// place holder is shown when the is no value entered
const WithPlaceholder = () => {
  const [value, setValue] = useState('');
  return (
    <LabelInput
      value={value}
      handleChange={setValue}
      placeholder="Enter Something ..."
    />
  );
};

// when we need to show some error
// comes with red border
const WithError = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <LabelInput
        value={value}
        handleChange={setValue}
        placeholder="Enter Something ..."
        error={true}
      />
    </>
  );
};

// with the helper text
const WithHelperText = () => {
  const [value, setValue] = useState('');
  return (
    <LabelInput
      value={value}
      handleChange={setValue}
      placeholder="Enter Something ..."
      helperText="this is a helper text ..."
    />
  );
};

// with optional props
const AllProps = () => {
  const [value, setValue] = useState('');
  return (
    <LabelInput
      value={value}
      error={false}
      handleBlur={() => {
        console.log('blur');
      }}
      handleFocus={() => {
        console.log('focus');
      }}
      handleChange={setValue}
      placeholder="Enter Something ..."
      helperText="this is a helper text ..."
      label="Email"
      leftComponent={<EnvelopeIcon />}
      rightComponent={<Eye />}
    />
  );
};

// export all as a const to map into the catalog
// all varients of LabelInput
export const LABEL_INPUT_VARIANTS = {
  Default: () => <LabelInputDefault />,
  WithPlaceholder: () => <WithPlaceholder />,
  WithError: () => <WithError />,
  WithHelperText: () => <WithHelperText />,
  AllProps: () => <AllProps />,
};
