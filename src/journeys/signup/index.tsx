import React from 'react';
import {View} from 'react-native';
import HeaderLayout from '~/components/layoutes/HeaderLayout';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import LabelInput from '~/components/label-input/LabelInput';

//** this is the sign up langing page where we start with verifying user phone number  */
const SignUpLanding = () => {
  return (
    <HeaderLayout
      progressPercent={12}
      rootStyles={styles.root}
      conatinerStyles={styles.container}>
      <TitleSubtitle
        title="Confirm your phone"
        subTitle="select your phone number we will send 6 digit code ."
      />
      <View style={styles.formContainer}>
        <LabelInput
          value={''}
          label="Phone number"
          placeholder="Phone number"
          handleChange={() => {}}
        />
      </View>
    </HeaderLayout>
  );
};

export default SignUpLanding;
