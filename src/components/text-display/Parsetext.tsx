import React from 'react';
import {Trans} from 'react-i18next';
import {Text, TextStyle} from 'react-native';
import {parseTextStyles as styles} from './text-display.styles';

/**
 *
 * This component parses the text and replaces the <tag> with required styles.
 */
type ParseTextProps = {
  text: string;
  textStyle?: TextStyle;
};

const parsetext: React.FC<ParseTextProps> = ({text, textStyle}) => {
  return (
    <Text style={textStyle}>
      <Trans
        defaults={text}
        components={{
          li: <Text style={styles.linktext} />,
        }}
      />
    </Text>
  );
};

export default parsetext;
