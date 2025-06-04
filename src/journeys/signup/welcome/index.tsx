import React from 'react';
import {Image} from 'react-native';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import styles from './index.styles';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Stack} from '~/common/constants/navigation.constants';

// this is the welcome scree that appears after completing registration
const Welcome = () => {
  const navigate = useNavigation();
  return (
    <HeaderLayout
      progressPercent={100}
      containerStyles={styles.root}
      buttonProps={{
        handlePress: () => {
          navigate.replace(Stack.APP_LANDING);
        },
        label: 'Continue',
        theme: 'Primary',
      }}>
      <Image
        source={require('../../../../assets/welcome.png')}
        style={styles.img}
      />
      <TitleSubtitle
        customStyles={{
          title: styles.titleCenter,
          subtitle: styles.titleCenter,
        }}
        title={'Congratulations!\nWelcome to Coinpay'}
        subTitle="We are happy to have you. it's time to send, receive and track your expense"
      />
    </HeaderLayout>
  );
};

export default Welcome;
