import React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './elevated-box-styles';

// types...
type ElevatedBoxProps = {
  children: React.ReactNode;
  customStyles?: ViewStyle;
};

// a box container with elevation
const ElevatedBox = ({children, customStyles}: ElevatedBoxProps) => {
  return <View style={[styles.root, customStyles]}>{children}</View>;
};

export default ElevatedBox;
