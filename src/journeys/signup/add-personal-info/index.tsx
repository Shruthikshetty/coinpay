import React from 'react';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import {View} from 'react-native';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import {useFormContext} from 'react-hook-form';

// this is the form to fill in the user personal details
// part of signup flow
const AddPersonalInfo = () => {
  // get the trigger and errors from form context
  const {
    formState: {errors},
    trigger,
  } = useFormContext<CustomerRegisterSchemeType>();
  // function to handle click on continue
  const handleContinue = async () => {
    // trigger the validations
    const isValid = await trigger(['name', 'userName', 'dob']);
    if (isValid) {
      // navigate to next screen
    }
    // nothing to to do here if its not valid
  };

  return (
    <HeaderLayout
      progressPercent={28}
      containerStyles={styles.container}
      buttonProps={{
        label: 'Continue',
        handlePress: handleContinue,
        theme: 'Primary',
        disabled: !!errors.name || !!errors.userName || !!errors.dob,
      }}>
      <TitleSubtitle
        title={'Personal Info'}
        subTitle="This info need's to be accurate with your ID document ."
      />
      <View style={styles.form}>
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'name'}
          label="Full name"
          placeholder="John Doe"
        />
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'userName'}
          label="Username"
          placeholder="@username"
        />
        {/* to be changed with calender input */}
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'dob'}
          label="Date of Birth"
          placeholder="MM / DD / YYYY"
        />
      </View>
    </HeaderLayout>
  );
};

export default AddPersonalInfo;
