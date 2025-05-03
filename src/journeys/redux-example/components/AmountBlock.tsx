import {Text, View} from 'react-native';
import styles from './amount-block.style';
import {RUPEE_SYMBOL} from '~/common/constants/screen.constants';
import {useAppSelector} from '~/common/hooks/redux-custom-hooks';

// this component display's the total amount
const AmountBlock = () => {
  // getting the amount from redux
  const amount = useAppSelector(state => state.exampleData.amount);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Amount</Text>
      <Text style={styles.amount}>
        {RUPEE_SYMBOL} {amount}
      </Text>
    </View>
  );
};

export default AmountBlock;
