import React, {useState} from 'react';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import {useFormContext} from 'react-hook-form';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import {TouchableOpacity, View} from 'react-native';
import Button from '~/components/buttons/Button';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Route} from '~/common/constants/navigation.constants';
import Lock from '~/components/svgs/Lock';
import Unlock from '~/components/svgs/Unlock';
import Eye from '~/components/svgs/Eye';
import SlashEye from '~/components/svgs/EyeSlash';
import {colors} from '~/common/constants/colors.constants';

/**
 * This is the form screen for setting the password
 */
const SetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // get the errors from the form state
  const {
    formState: {errors},
    trigger,
  } = useFormContext();

  const navigation = useNavigation();

  // handles confirm button press
  const handleConfirm = async () => {
    // trigger the validations for the required fields
    const valid = await trigger(['password', 'confirmPassword']);
    if (valid) {
      // navigate to next screen
      navigation.navigate(Route.ADD_EMAIL);
    }
  };
  return (
    <HeaderLayout
      progressPercent={22}
      title="Set Password"
      containerStyles={styles.container}>
      <View style={styles.innerContainer}>
        <TitleSubtitle
          title="Create a password"
          subTitle="Confirm your Phone number and create your password"
        />
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'phoneNumber'}
          label={'Phone number'}
          disabled={true}
          placeholder="Phone number"
        />
        <FormLabelInput<CustomerRegisterSchemeType>
          leftComponent={passwordVisible ? <Unlock /> : <Lock />}
          name={'password'}
          label={'Password'}
          secureTextEntry={!passwordVisible}
          placeholder="*****"
          rightComponent={
            <TouchableOpacity onPress={() => setPasswordVisible(s => !s)}>
              {passwordVisible ? <Eye fill={colors.blue500} /> : <SlashEye />}
            </TouchableOpacity>
          }
        />
        <FormLabelInput<CustomerRegisterSchemeType>
          leftComponent={<Unlock />}
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
