import {Text, TextStyle, TouchableOpacity} from 'react-native';
import {LinkButtonStyles as styles} from './button.styles';

type LinkButtonProps = {
  center?: boolean;
  size?: number;
  handlePress: () => void;
  title: string;
  customStyles?: TextStyle;
};

// simple button for link
const LinkButton = ({
  center = false,
  size,
  handlePress,
  title = 'Link',
  customStyles,
}: LinkButtonProps) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text
        style={[
          styles.link,
          center && styles.center,
          Boolean(size) && {fontSize: size},
          customStyles,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
