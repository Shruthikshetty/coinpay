import {Controller, FieldValues, Path, useFormContext} from 'react-hook-form';
import LabelInput, {LabelInputProps} from '../label-input/LabelInput';

// types...
type FormLabelInputProps<T extends FieldValues> = {
  name: Path<T>;
} & Pick<
  LabelInputProps,
  | 'rightComponent'
  | 'handleBlur'
  | 'handleFocus'
  | 'label'
  | 'placeholder'
  | 'helperText'
  | 'leftComponent'
>;

// form controlled Label input to use with forms
const FormLabelInput = <T extends FieldValues>({
  name,
  helperText,
  ...labelInputProps
}: FormLabelInputProps<T>) => {
  // cen control from the form context context
  const {control} = useFormContext();
  return (
    <Controller
      control={control}
      render={({
        field: {value, onChange, ...restFeilds},
        fieldState: {error},
      }) => (
        <LabelInput
          value={value}
          handleChange={onChange}
          {...restFeilds}
          helperText={error?.message ? error?.message : helperText} // error messge or helper text
          error={!!error}
          {...labelInputProps}
        />
      )}
      name={name}
    />
  );
};

export default FormLabelInput;
