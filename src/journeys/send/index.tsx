import React from 'react';
import styles from './index.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderPanel from '~/components/header-panel/HeaderPanel';
import {useNavigation} from '~/common/hooks/use-navigation';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import ElevatedBox from '~/components/elevated-box/ElevatedBox';
import {Text} from 'react-native';
import TransactionItem from '~/components/transaction-item/TransactionItem';
import {RUPEE_SYMBOL} from '~/common/constants/screen.constants';

//@TODO in progress
const Send = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderPanel
        handleBackPress={() => {
          navigation.goBack();
        }}
      />
      <TitleSubtitle
        customStyles={{root: styles.titleRoot}}
        title={'Choose Recipient'}
        subTitle="Please select your recipient to send money."
      />
      <ElevatedBox customStyles={styles.boxStyle}>
        <Text style={styles.recentsText}>Most Recent</Text>
        <TransactionItem
          name={'Mehedi hansan'}
          email={'helloyoumind@gmail.com'}
          amount={RUPEE_SYMBOL + '100'}
        />
      </ElevatedBox>
    </SafeAreaView>
  );
};

export default Send;
