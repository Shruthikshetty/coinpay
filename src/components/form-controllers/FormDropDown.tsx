import {Controller, FieldValues, Path, useFormContext} from 'react-hook-form';
import DropDown, {DropDownProps} from '../drop-down/DropDown';

//types ...
type FormDropDownProps<T extends FieldValues, OptionType = string> = {
  name: Path<T>;
  options: OptionType[];
  renderOption?: (item: OptionType) => string;
  helperText?: string;
} & Omit<
  DropDownProps<OptionType>,
  'value' | 'handleValue' | 'renderOption' | 'options' | 'error'
>;

/**
 * This is a form controlled wrapper for DropDown
 */
const FormDropDown = <T extends FieldValues, OptionType = string>({
  name,
  options,
  renderOption,
  helperText,
  ...restDropdownProps
}: FormDropDownProps<T, OptionType>) => {
  const {control} = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <DropDown
          options={options}
          value={value}
          handleValue={onChange}
          renderOption={renderOption}
          error={!!error}
          helperText={error?.message || helperText}
          {...restDropdownProps}
        />
      )}
    />
  );
};

export default FormDropDown;
