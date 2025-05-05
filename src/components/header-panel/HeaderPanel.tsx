import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './header-panel.styles';
import Angleleft from '../svgs/AngleLeft';
import ProgressBar from './progress-bar';

//types ...
type HeaderPanelBase = {
  rightComponent?: React.ReactNode;
  title?: string;
  progressPercent?: number;
};

type HeaderPanelWithBack = {
  backButton?: true;
  handleBackPress: () => void;
};

type HeaderPanelWithoutBack = {
  backButton: false;
  handleBackPress?: () => void;
};

type HeaderPanel = HeaderPanelBase &
  (HeaderPanelWithBack | HeaderPanelWithoutBack);

// this is a Reusable header that provides back button and title
const HeaderPanel = ({
  rightComponent,
  title = '',
  handleBackPress,
  backButton = true,
  progressPercent,
}: HeaderPanel) => {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.flex1}>
          {/* back icon */}
          {backButton && (
            <TouchableOpacity onPress={handleBackPress}>
              <Angleleft />
            </TouchableOpacity>
          )}
        </View>
        <Text style={[styles.title, !rightComponent && styles.flex6]}>
          {title}
        </Text>
        <View style={styles.flex1}>
          {/* any right component can be text or a icon */}
          {rightComponent}
        </View>
      </View>
      {progressPercent && <ProgressBar Progress={progressPercent} />}
    </>
  );
};

export default HeaderPanel;
