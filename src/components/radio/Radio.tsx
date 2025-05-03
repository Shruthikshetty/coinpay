import {View, Text, TouchableOpacity} from 'react-native';
import styles from './radio-styles';
import RadioDot from './RadioDot';
import {colors} from '~/common/constants/colors.constants';
import {useRadioGroupContext} from './wrapper/RadioGroup';

export type RadioProps = {
  value: string;
  subTitle?: string;
  frameColor?: string;
  image?: React.ReactNode;
};
/**
 * Radio component to be used within a Radio Group
 * @param selected string
 * ...etc
 * @returns JSX Element
 */
const Radio = ({
  value = 'title',
  subTitle,
  frameColor,
  image,
}: RadioProps): React.ReactElement => {
  const {setValue, value: selectedValue} = useRadioGroupContext();
  return (
    <TouchableOpacity
      style={selectedValue === value ? styles.selected : undefined}
      onPress={() => {
        setValue(s => (value === s ? undefined : value));
      }}>
      <View style={styles.root}>
        <View style={styles.imgContainer}>
          <View
            style={[
              styles.imageFrame,
              {backgroundColor: frameColor ?? colors.blue200},
            ]}>
            {/* frame image  */}
            {image}
          </View>
        </View>
        <View style={styles.detailContainer}>
          {/* details  */}
          <Text style={styles.title}>{value}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
        {/* Radio dot */}
        <View style={styles.dotContainer}>
          <RadioDot selected={selectedValue === value} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Radio;
