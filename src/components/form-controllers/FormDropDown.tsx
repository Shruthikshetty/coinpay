import {Controller, FieldValues, Path, useFormContext} from 'react-hook-form';
import DropDown from '../drop-down/DropDown';

//types ...
type FormDropDownProps<T extends FieldValues, OptionType = string> = {
  name: Path<T>;
  options: OptionType[];
  renderOption?: (item: OptionType) => string;
  label?: string;
  placeholder?: string;
  helperText?: string;
};

/**
 * This is a form controlled wrapper for DropDown
 */
const FormDropDown = <T extends FieldValues, OptionType = string>({
  name,
  options,
  renderOption,
  label,
  placeholder,
  helperText,
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
          label={label}
          placeholder={placeholder}
          error={!!error}
          helperText={error?.message || helperText}
        />
      )}
    />
  );
};

export default FormDropDown;
