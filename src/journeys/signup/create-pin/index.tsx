import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '~/components/buttons/Button';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import PinWithJumbledBoard from '~/components/pin-input/wrapper/pin-input-with-jumbled-keyboard';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import styles from './index.styles';
import {useFormContext} from 'react-hook-form';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Route} from '~/common/constants/navigation.constants';

const CreatePin = () => {
  //state to store pin
  const [pin, setPin] = useState('');

  // get setValue from form context
  const {setValue} = useFormContext<CustomerRegisterSchemeType>();

  const navigation = useNavigation();

  //handle confirm
  const handleConfirm = () => {
    //set the pin value
    setValue('pin', pin);
    // go to next screen
    navigation.navigate(Route.ACCOUNT_SETUP);
  };

  return (
    <HeaderLayout progressPercent={80}>
      <TitleSubtitle
        customStyles={{root: styles.titleRoot}}
        title="Create pin"
        subTitle="Remember this pin to log into the app"
      />
      <PinWithJumbledBoard pin={pin} setPin={setPin}>
        <View style={styles.buttonContainer}>
          <Button
            theme="Primary"
            label="Confirm"
            handlePress={handleConfirm}
            disabled={pin.length !== 4}
          />
        </View>
      </PinWithJumbledBoard>
    </HeaderLayout>
  );
};

export default CreatePin;
