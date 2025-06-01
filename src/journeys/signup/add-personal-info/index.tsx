import React from 'react';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import {View} from 'react-native';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import {useFormContext} from 'react-hook-form';
import FormCalenderInput from '~/components/form-controllers/FormCalenderInput';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Route} from '~/common/constants/navigation.constants';
import moment from 'moment';
import {DATE_FORMAT} from '~/common/constants/screen.constants';
import {number} from 'zod';

// this is the form to fill in the user personal details
// part of signup flow
const AddPersonalInfo = () => {
  // get the trigger and errors from form context
  const {
    formState: {errors},
    trigger,
  } = useFormContext<CustomerRegisterSchemeType>();
  const navigation = useNavigation();
  // function to handle click on continue
  const handleContinue = async () => {
    // trigger the validations
    const isValid = await trigger(['name', 'userName', 'dob']);
    if (isValid) {
      // navigate to next screen
      navigation.navigate(Route.CREATE_PIN);
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
        <FormCalenderInput<CustomerRegisterSchemeType>
          maxDate={moment().format(DATE_FORMAT.YYYY_MM_DD)}
          yearSelectRange={[30, 0]} // can select 30 past years
          name="dob"
          label="Date of Birth"
        />
      </View>
    </HeaderLayout>
  );
};

export default AddPersonalInfo;
