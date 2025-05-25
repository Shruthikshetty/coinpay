import React from 'react';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import {View} from 'react-native';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import Button from '~/components/buttons/Button';

// this is the form to fill in the user personal details
// part of signup flow
const AddPersonalInfo = () => {
  return (
    <HeaderLayout progressPercent={28} containerStyles={styles.container}>
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
      <Button label="Continue" theme="Primary" handlePress={() => {}} />
    </HeaderLayout>
  );
};

export default AddPersonalInfo;
