import React from 'react';
import styles from './index.styles';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import {useFormContext} from 'react-hook-form';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import EnvelopeIcon from '~/components/svgs/EnvelopeIcon';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Route} from '~/common/constants/navigation.constants';

//This is the form screen for adding the email
const AddEmail = () => {
  // get the errors from the form state
  const {
    formState: {errors},
    trigger,
  } = useFormContext();

  const navigation = useNavigation();

  //
  const handleContinue = async () => {
    // check if email is valid
    const valid = await trigger('email');
    if (valid) {
      //navigate to next screen
      navigation.navigate(Route.ADD_HOME_ADDRESS);
    }
    // else do nothing
    // button will get disabled
  };

  return (
    <HeaderLayout
      progressPercent={27}
      containerStyles={styles.container}
      buttonProps={{
        handlePress: handleContinue,
        label: 'Continue',
        theme: 'Primary',
        disabled: !!errors?.email,
      }}>
      <TitleSubtitle
        title="Add your email"
        subTitle="This info need's to be accurate with your ID document ."
      />
      <FormLabelInput<CustomerRegisterSchemeType>
        name={'email'}
        leftComponent={<EnvelopeIcon />}
        placeholder="name@example.com"
      />
    </HeaderLayout>
  );
};

export default AddEmail;
