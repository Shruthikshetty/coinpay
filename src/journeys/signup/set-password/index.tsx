import React, {useMemo} from 'react';
import HeaderLayout from '~/components/layoutes/HeaderLayout';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import {useFormContext} from 'react-hook-form';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerregisterSchemeType} from '~/navigation/signup/signup-schema';
import {View} from 'react-native';
import Button from '~/components/buttons/Button';

const SetPassword = () => {
  // get the errors from the form state
  const {
    formState: {errors},
    trigger,
  } = useFormContext();

  // handles confirm button press
  const handleConfirm = () => {
    // confirm logic
    trigger(['password', 'confirmPassword']);
  };
  return (
    <HeaderLayout
      progressPercent={22}
      title="Set Password"
      conatinerStyles={styles.container}>
      <View style={styles.innerContainer}>
        <TitleSubtitle
          title="Create a password"
          subTitle="Confirm your Phone number and create your password"
        />
        <FormLabelInput<CustomerregisterSchemeType>
          name={'phoneNumber'}
          label={'Phone number'}
          disabled={true}
          placeholder="Phone number"
        />
        <FormLabelInput<CustomerregisterSchemeType>
          name={'password'}
          label={'Password'}
          secureTextEntry={true}
          placeholder="****"
        />
        <FormLabelInput<CustomerregisterSchemeType>
          name={'confirmPassword'}
          label={'Confirm password'}
          placeholder="****"
        />
      </View>
      <Button
        theme="Primary"
        label="Confirm"
        handlePress={handleConfirm}
        disabled={Boolean(errors?.password || errors?.confirmPassword)}
      />
    </HeaderLayout>
  );
};

export default SetPassword;
