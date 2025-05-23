import {Text} from 'react-native';
import ElevatedBox from '~/components/elevated-box/ElevatedBox';

//default way to use elevated box
const Default = () => (
  <ElevatedBox>
    <Text>This is where the children's go</Text>
  </ElevatedBox>
);

//export all the variations
export const ELEVATED_BOX_VARIANTS = {
  Default: () => <Default />,
};
