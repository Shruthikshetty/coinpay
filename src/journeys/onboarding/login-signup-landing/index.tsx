import React from 'react';
import {Image, View} from 'react-native';
import HeaderLayout from '~/components/layoutes/HeaderLayout';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import Button from '~/components/buttons/Button';
import Parsetext from '~/components/text-display/Parsetext';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Stack} from '~/common/constants/navigation.constants';

// this is the starting screen of the app where user can select to login or signup
const PreLogin = () => {
  const navigation = useNavigation();
  return (
    <HeaderLayout
      progressPercent={10}
      rootStyles={styles.root}
      containerStyles={styles.conatiner}>
      <Image
        source={require('~/../assets/craete-account-img.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TitleSubtitle
        customStyles={{
          title: styles.title,
          subtitle: styles.textCenter,
        }}
        title={`Create your \nCoinpay account`}
        subTitle="coinpay is a powerfull tool that allows you to easilt send , receivee and track your transactions"
      />
      <View style={styles.buttonContainer}>
        <Button
          label="Sign up"
          handlePress={() => {
            navigation.navigate(Stack.SIGNUP_STACK);
          }}
          theme="Primary"
        />
        <Button
          label="Log in"
          handlePress={() => {}}
          theme="Primary"
          variant="Border"
        />
      </View>
      <Parsetext
        text="By continuing you accept our <li>Terms of Service</li> and <li>Privacy Policy</li>"
        textStyle={styles.terms}
      />
    </HeaderLayout>
  );
};

export default PreLogin;
