import React from 'react';
import {Controller, FieldValues, Path, useFormContext} from 'react-hook-form';
import CountryDropDown from '../drop-down/wrapper/CountryDropDown';

//types ...
type FormCountryDropDownProps<T extends FieldValues> = {
  name: Path<T>;
  helperText?: string;
};

// form controlled country dropdown
const FormCountryDropDown = <T extends FieldValues>({
  name,
  helperText,
}: FormCountryDropDownProps<T>) => {
  const {control} = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <CountryDropDown
          value={value}
          setValue={onChange}
          error={!!error}
          helperText={
            (
              error as unknown as {
                country: {
                  message: string;
                };
              }
            )?.country?.message || helperText
          }
        />
      )}
    />
  );
};

export default FormCountryDropDown;
