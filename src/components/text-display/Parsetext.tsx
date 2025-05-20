import React from 'react';
import {Trans} from 'react-i18next';
import {Text, TextStyle} from 'react-native';
import {parseTextStyles as styles} from './text-display.styles';

//types...
type ParseTextProps = {
  text: string;
  textStyle?: TextStyle;
};

/**
 *
 * This component parses the text and replaces the <tag> with required styles.
 */
const Parsetext: React.FC<ParseTextProps> = ({text, textStyle}) => {
  return (
    <Text style={textStyle}>
      <Trans
        defaults={text}
        components={{
          li: <Text style={styles.linkText} />,
        }}
      />
    </Text>
  );
};

export default Parsetext;
