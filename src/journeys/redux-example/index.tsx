import React from 'react';
import {Text} from 'react-native';
import styles from './index.styles';
import AmountBlock from './components/AmountBlock';
import UpdateAmountBlock from './components/UpdateAmountBlock';
import {SafeAreaView} from 'react-native-safe-area-context';

// this file shows how we can store data globally
// redux
const ReduxExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Redux Example</Text>
      {/* the amount is shared between both the components below
          with out any props through global store*/}
      <AmountBlock />
      <UpdateAmountBlock />
    </SafeAreaView>
  );
};

export default ReduxExample;
