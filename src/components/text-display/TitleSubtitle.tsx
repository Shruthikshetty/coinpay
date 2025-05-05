import React from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import {titleSubtitleStyles as styles} from './text-display.styles';

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
  return (
    <View style={[styles.root, customStyles?.root]}>
      <Text style={[styles.title, customStyles?.title]}>{title}</Text>
      <Text style={[styles.subtitle, customStyles?.subtitle]}>{subTitle}</Text>
    </View>
  );
};

export default TitleSubtitle;
