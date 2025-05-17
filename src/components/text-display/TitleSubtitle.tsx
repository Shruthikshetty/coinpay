import React from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import {titleSubtitleStyles as styles} from './text-display.styles';
import {getCombinedStyles} from '~/common/utils/combined-styles';

//types...
type customStyles = {
  root: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
};

type TitleSubtitleProps = {
  title: string;
  subTitle?: string;
  customStyles?: Partial<customStyles>;
};

//this is a Reusable component that provides title and subtitle
// by default the title is bold and subtitle is normal
const TitleSubtitle = ({subTitle, title, customStyles}: TitleSubtitleProps) => {
  // combine the default and custom styles
  const combinedStyles = getCombinedStyles<customStyles>(styles, customStyles);
  return (
    <View style={combinedStyles.root}>
      {title && <Text style={combinedStyles.title}>{title}</Text>}
      {subTitle && <Text style={combinedStyles.subtitle}>{subTitle}</Text>}
    </View>
  );
};

export default TitleSubtitle;
