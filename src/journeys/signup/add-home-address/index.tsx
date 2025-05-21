import React from 'react';

import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import styles from './index.styles';
import {View} from 'react-native';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';

// This is the form screen for filling in the home address
const AddHomeAddress = () => {
  return (
    <HeaderLayout
      progressPercent={28}
      containerStyles={styles.container}
      buttonProps={{
        handlePress: () => {},
        label: 'Continue',
        theme: 'Primary',
      }}>
      <TitleSubtitle
        title={'Home address'}
        subTitle="This info need's to be accurate with your ID document ."
      />
      <View style={styles.form}>
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'address'}
          label="Address line"
        />
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'country'}
          label="Country"
        />
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'city'}
          label="City"
        />
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'pinCode'}
          label="Postcode"
        />
      </View>
    </HeaderLayout>
  );
};

export default AddHomeAddress;
