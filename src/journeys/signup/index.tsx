import React, {useState} from 'react';
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
import {useSendOtp, useVerifyOtp} from '~/services/otp-service';
import {useAlert} from '~/common/hooks/use-alert';
import DashedInput from '~/components/dashed-input/DashedInput';
import Parsetext from '~/components/text-display/Parsetext';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Route} from '~/common/constants/navigation.constants';

//** this is the sign up langing page where we start with verifying user phone number  */
const SignUpLanding = () => {
  const [otpSent, setotpSent] = useState(false);
  // this holds the user entered otp
  const [otp, setotp] = useState('');
  const {watch, formState} = useFormContext();
  // this is extracted from form since its required for conditions
  const phoneNumber = watch('phoneNumber');
  // holdes the data if phone number is valied or not
  const isPhoneValid = !!phoneNumber && !formState.errors.phoneNumber;
  // used to handle the confirm phone numbe modal
  const model = useModal();
  // custom muation hook for sending otp
  const {mutate: sendOtpMutation} = useSendOtp();
  // show the apt as a alert message
  const {changeAlert} = useAlert('Success', 'light');
  //custom hook for verify otp
  const {mutate: verifyOtpMuation} = useVerifyOtp();
  const navigation = useNavigation();

  const verifyotp = () => {
    // verify the otp entered by the user
    verifyOtpMuation(
      {
        phoneNumber: phoneNumber,
        otp: otp,
      },
      {
        onSuccess: () => {
          // on success navigate to next screen of setting password
          navigation.navigate(Route.SET_PASSWORD);
          // reset otp
          setotp('');
          setotpSent(false);
        },
        onError: error => {
          // show alert message if wrong otp entered
          changeAlert(
            error?.response?.data?.message ?? `Wrong otp`,
            'Error',
            'light',
          );
          // reset otp
          setotp('');
          setotpSent(false);
        },
      },
    );
  };
  return (
    <HeaderLayout
      progressPercent={12}
      rootStyles={styles.root}
      conatinerStyles={styles.container}>
      <View>
        <TitleSubtitle
          title="Confirm your phone"
          subTitle={'select your phone number we will send 6 digit code .'}
        />

        <View style={styles.formContainer}>
          {otpSent ? (
            <View style={styles.otpFeidContainer}>
              <DashedInput value={otp} setValue={setotp} />
              <Parsetext
                text={`Didn't get a code <li>Resend</li>`}
                textStyle={styles.resendText}
              />
            </View>
          ) : (
            <FormLabelInput<CustomerregisterSchemeType>
              name="phoneNumber"
              label="Phone number"
              placeholder="Phone number"
              keyboardType="number-pad"
            />
          )}
        </View>
      </View>
      <Button
        disabled={!isPhoneValid}
        theme="Primary"
        handlePress={() => {
          otpSent ? verifyotp() : model.show(); // show the modal
        }}
        label={otpSent ? 'Verify otp' : 'Send otp'}
      />
      <ConfirmPhoneModal
        modal={model}
        phoneNumber={phoneNumber}
        handleConfim={() => {
          sendOtpMutation(
            {phoneNumber},
            {
              onSuccess: data => {
                console.log(data?.otp); //@TODO add a notification .
                // send the otp as an alert message
                changeAlert(`otp : ${data?.otp}`, 'Success', 'light');
                setotpSent(true);
              },
              onError: error => {
                // send the failure as an alert message
                changeAlert(
                  error?.response?.data?.message ?? `Failed to send otp`,
                  'Error',
                  'light',
                );
              },
            },
          );
        }}
      />
    </HeaderLayout>
  );
};

export default SignUpLanding;
