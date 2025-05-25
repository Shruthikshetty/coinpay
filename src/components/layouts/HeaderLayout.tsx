import React from 'react';
import {SafeAreaView, View, ViewStyle} from 'react-native';
import HeaderPanel, {HeaderPanelBase} from '../header-panel/HeaderPanel';
import {headerLayoutStyles as styles} from './layout.styles';
import {useNavigation} from '~/common/hooks/use-navigation';
import Button, {ButtonProps} from '../buttons/Button';

// types...
type HeaderLayoutProps = {
  children: React.ReactNode;
  rootStyles?: ViewStyle;
  containerStyles?: ViewStyle;
  handleBackPress?: () => void;
  backButton?: boolean;
  buttonProps?: ButtonProps;
} & Omit<HeaderPanelBase, 'handleBackPress' | 'backButton'>;

// this is a layout that comes with a header with back button
const HeaderLayout = ({
  children,
  containerStyles,
  rootStyles,
  backButton = true,
  handleBackPress,
  buttonProps,
  ...headerprops
}: HeaderLayoutProps) => {
  const navigation = useNavigation();

  //handle back navigation
  const handleNavigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[styles.container, rootStyles]}>
      <HeaderPanel
        backButton={backButton}
        handleBackPress={handleBackPress ?? handleNavigateBack}
        {...headerprops}
      />
      <View style={[styles.content, containerStyles]}>{children}</View>
      {buttonProps && (
        <Button customStyles={{root: styles.button}} {...buttonProps} />
      )}
    </SafeAreaView>
  );
};

export default HeaderLayout;
