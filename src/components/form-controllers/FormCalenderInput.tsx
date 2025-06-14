import React from 'react';
import {Controller, FieldValues, Path, useFormContext} from 'react-hook-form';
import CalenderInput, {
  CalenderInputProps,
} from '../calender-input/calender-input';
import {useModal} from '~/common/hooks/use-model';

//types ...
type FormCalenderInputProps<T extends FieldValues> = {
  name: Path<T>;
  helperText?: string;
} & Omit<
  CalenderInputProps,
  'helperText' | 'error' | 'modal' | 'setSelectedDate' | 'selectedDate'
>;

// form controlled calender input
const FormCalenderInput = <T extends FieldValues>({
  name,
  helperText,
  ...restFields
}: FormCalenderInputProps<T>) => {
  // get form control from context
  const {control} = useFormContext<T>();
  // use the model control here
  const model = useModal();
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <CalenderInput
          selectedDate={value}
          modal={model}
          setSelectedDate={onChange}
          error={!!error}
          helperText={helperText ?? error?.message}
          {...restFields}
        />
      )}
    />
  );
};

export default FormCalenderInput;
