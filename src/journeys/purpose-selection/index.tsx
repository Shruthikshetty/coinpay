import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './index.styles';
import Radio from '~/components/radio/Radio';
import {colors} from '~/common/constants/colors.constants';
import RadioGroup from '~/components/radio/wrapper/RadioGroup';
import UserIcon from '~/components/svgs/UserIcon';
import BriefCaseIcon from '~/components/svgs/BriefCaseIcon';
import ReceiptIcon from '~/components/svgs/ReceiptIcon';
import {useState} from 'react';

//screen no 1 of the app containing ...
const PurposeSelect = () => {
  const [value, setValue] = useState<undefined | string>();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.heading}>Select a purpose</Text>

      <RadioGroup setValue={setValue} value={value}>
        <Radio
          value={'Personal'}
          subTitle={'Pay friends and family'}
          image={<UserIcon width={40} height={50} />}
        />
        <Radio
          frameColor={colors.yellow200}
          value={'Business'}
          subTitle={'Pay your employees'}
          image={<BriefCaseIcon />}
        />
        <Radio
          frameColor={colors.gray100}
          value={'Payment'}
          subTitle={`Pay your utility bill's`}
          image={<ReceiptIcon />}
        />
      </RadioGroup>
    </SafeAreaView>
  );
};

export default PurposeSelect;
