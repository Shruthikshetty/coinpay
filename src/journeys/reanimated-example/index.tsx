import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './index.styles';
import HeaderPanel from '~/components/header-panel/HeaderPanel';
import {useNavigation} from '~/common/hooks/use-navigation';
import Animated from 'react-native-reanimated';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import {colors} from '~/common/constants/colors.constants';

/**
 * This screen contains an example on how to use reanimated
 * @returns {JSX.Element}
 */
const ReanimatedExample = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderPanel
        title="Reanimated Example"
        handleBackPress={() => navigation.goBack()}
      />
      <TitleSubtitle
        title=""
        subTitle={`This is an example of how reanimated can be used for animation. \n\ne are using reanimated 3`}
      />
      <View style={styles.content}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: colors.blue500,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReanimatedExample;
