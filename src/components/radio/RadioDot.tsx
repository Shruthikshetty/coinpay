import {View} from 'react-native';
import {radioDotStyles as styles} from './radio-styles';
/**
 * The Dot for radio block
 * @param selected boolean
 * @returns JSX Element
 */
const RadioDot = ({selected}: {selected: boolean}) => {
  return (
    <View style={styles.dotBorder}>
      {selected && <View style={styles.activeDot} />}
    </View>
  );
};

export default RadioDot;
