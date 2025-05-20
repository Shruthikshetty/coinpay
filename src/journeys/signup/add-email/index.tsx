import React from 'react';
import styles from './index.styles';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import {useFormContext} from 'react-hook-form';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import Button from '~/components/buttons/Button';
import {View} from 'react-native';

const AddEmail = () => {
  // get the errors from the form state
  const {
    formState: {errors},
    trigger,
  } = useFormContext();

  return (
    <HeaderLayout progressPercent={27} containerStyles={styles.container}>
      <View style={styles.form}>
        <TitleSubtitle
          title="Add your email"
          subTitle="This info need's to be accurate with your ID document ."
        />
        <FormLabelInput<CustomerRegisterSchemeType> name={'email'} />
      </View>
      <Button
        handlePress={() => {}}
        label="Confirm"
        theme="Primary"
        disabled={!!errors?.email}
      />
    </HeaderLayout>
  );
};

export default AddEmail;
