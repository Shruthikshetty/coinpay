import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';

// this is the welcome scree that appears after completing registration
const Welcome = () => {
  return (
    <SafeAreaView>
      <TitleSubtitle
        title={'Congratulations!\nWelcome to Coinpay'}
        subTitle="We are happy to have you. it's time to send, receive and track your expense"
      />
    </SafeAreaView>
  );
};

export default Welcome;
