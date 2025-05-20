import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ProgressBarStyles as styles} from './header-panel.styles';
import {getCombinedStyles} from '~/common/utils/combined-styles';

// types....
export type ProgressCustomStyles = {
  root: ViewStyle;
  fill: ViewStyle;
};

type ProgressBarProps = {
  Progress: number; // percentage of progress
  fillColor?: string;
  customStyles?: ProgressCustomStyles;
};

// this a progress bar where the progress is taken by percentage
const ProgressBar = ({Progress, fillColor, customStyles}: ProgressBarProps) => {
  const minMaxProgress = Math.max(0, Math.min(100, Progress)); // ensure progress is between 0 and 100
  // combined styles
  const combinedStyles = getCombinedStyles<ProgressCustomStyles>(
    styles,
    customStyles,
  );
  return (
    <View style={combinedStyles.root}>
      {/* this is the fill , fill up based on percent */}
      <View
        style={[
          combinedStyles.fill,
          fillColor && {backgroundColor: fillColor},
          {width: `${minMaxProgress}%`},
        ]}
      />
    </View>
  );
};

export default ProgressBar;
