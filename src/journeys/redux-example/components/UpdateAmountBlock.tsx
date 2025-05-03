import {Text, View} from 'react-native';
import styles from './update-ampunt-block.styles';
import Button from '~/components/buttons/Button';
import {RUPEE_SYMBOL} from '~/common/constants/screen.constants';
import {
  addAmount,
  resetAmount,
  subtractAmount,
} from '~/state-management/redux-example-slice';
import {
  useAppDispatch,
  useAppSelector,
} from '~/common/hooks/redux-custom-hooks';

// this component is used to modify the amount
const UpdateAmountBlock = () => {
  // initailize dispatch
  const dispatch = useAppDispatch();
  // get about from store
  // used to prevent amount from going to negative values
  const amount = useAppSelector(state => state.exampleData.amount);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Modify amount</Text>
      <View style={styles.buttonContainer}>
        <Button
          theme={'Primary'}
          label={`Add ${RUPEE_SYMBOL}500`}
          handlePress={() => {
            // actions has to be dispatched
            dispatch(addAmount(500)); // this is a action to add 500 to the amount stored in redux
          }}
        />
        <Button
          theme={'Primary'}
          disabled={amount === 0} // button is disabled when the amount is 0
          label={`Remove ${RUPEE_SYMBOL}500`}
          handlePress={() => {
            dispatch(subtractAmount(500)); // this is a action to remove 500 from the amount stored in redux
          }}
        />
        <Button
          theme={'Error'}
          label={'Rest Amount'}
          handlePress={() => {
            dispatch(resetAmount()); // reset back to default amount
          }}
        />
      </View>
    </View>
  );
};

export default UpdateAmountBlock;
