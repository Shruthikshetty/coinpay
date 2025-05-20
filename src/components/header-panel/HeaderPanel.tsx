import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './header-panel.styles';
import AngleLeft from '../svgs/AngleLeft';
import ProgressBar from './progress-bar';

//types ...
export type HeaderPanelBase = {
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

/**
 * this is a Reusable header that provides back button and title
 * @param {object} props
 * @param {React.ReactNode} [props.rightComponent] - Optional component to display on the right side.
 * @param {string} [props.title] - Title text for the header.
 * @param {() => void} [props.handleBackPress] - Function to call when back button is pressed. Required if backButton is true.
 * @param {boolean} [props.backButton=true] - Whether to show the back button. Defaults to true. (which makes handleBackPress true by deault as well)
 * @param {number} [props.progressPercent] - Optional progress percentage to display a progress bar.
 * @returns {JSX.Element}
 */
const HeaderPanel = ({
  rightComponent,
  title = '',
  handleBackPress = () => {},
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
              <AngleLeft />
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
