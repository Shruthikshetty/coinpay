import React from 'react';
import {SafeAreaView, View, ViewStyle} from 'react-native';
import HeaderPanel, {HeaderPanelBase} from '../header-panel/HeaderPanel';
import {headerLayoutStyles as styles} from './layout.styles';
import {useNavigation} from '~/common/hooks/use-navigation';

// types...
type HeaderLayoutProps = {
  children: React.ReactNode;
  rootStyles?: ViewStyle;
  conatinerStyles?: ViewStyle;
  handleBackPress?: () => void;
  backButton?: boolean;
} & Omit<HeaderPanelBase, 'handleBackPress' | 'backButton'>;

// this is a lyout that compes with a header with back button
const HeaderLayout = ({
  children,
  conatinerStyles,
  rootStyles,
  backButton = true,
  handleBackPress,
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
      <View style={[styles.content, conatinerStyles]}>{children}</View>
    </SafeAreaView>
  );
};

export default HeaderLayout;
