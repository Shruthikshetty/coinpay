import React from 'react';
import {View} from 'react-native';
import HeaderLayout from '~/components/layoutes/HeaderLayout';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerregisterSchemeType} from '~/navigation/signup/signup-schema';
import {useFormContext} from 'react-hook-form';
import Button from '~/components/buttons/Button';
import ConfirmPhoneModal from './components/ConfirmPhoneModal';
import {useModal} from '~/common/hooks/use-model';

//** this is the sign up langing page where we start with verifying user phone number  */
const SignUpLanding = () => {
  const {watch, formState} = useFormContext();
  // this is extracted from form since its required for conditions
  const phoneNumber = watch('phoneNumber');
  // holdes the data if phone number is valied or not
  const isPhoneValid = !!phoneNumber && !formState.errors.phoneNumber;
  // used to handle the confirm phone numbe modal
  const model = useModal();
  return (
    <HeaderLayout
      progressPercent={12}
      rootStyles={styles.root}
      conatinerStyles={styles.container}>
      <View>
        <TitleSubtitle
          title="Confirm your phone"
          subTitle={
            'select your phone number we will send 6 digit code to ' +
            phoneNumber
          }
        />
        <View style={styles.formContainer}>
          <FormLabelInput<CustomerregisterSchemeType>
            name="phoneNumber"
            label="Phone number"
            placeholder="Phone number"
            keyboardType="number-pad"
          />
        </View>
      </View>
      <Button
        disabled={!isPhoneValid}
        theme="Primary"
        handlePress={() => {
          model.show(); // show the modal
        }}
        label="Send otp"
        customStyles={{root: styles.button}}
      />
      <ConfirmPhoneModal
        modal={model}
        phoneNumber={phoneNumber}
        handleConfim={() => {
          console.log('calling otp');
        }}
      />
    </HeaderLayout>
  );
};

export default SignUpLanding;
