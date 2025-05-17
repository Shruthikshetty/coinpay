import React, {JSX, useRef} from 'react';
import {View} from 'react-native';
import styles from './index.styles';
import {useNavigation} from '~/common/hooks/use-navigation';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import {colors} from '~/common/constants/colors.constants';
import Button from '~/components/buttons/Button';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import HeaderLayout from '~/components/layoutes/HeaderLayout';

/**
 * This screen contains an example on how to use reanimated
 * @returns {JSX.Element}
 */
const ReanimatedExample = (): JSX.Element => {
  const navigation = useNavigation();
  //this is the width of the box
  const width = useSharedValue(100); // initially 100px
  // this will be the max width after which box will turn red
  const widthForRedbox = useRef(wp(90));

  // a simple animated style to change the color of the box when it reaches 90% of the screen width
  const boxAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      backgroundColor:
        width.value >= widthForRedbox.current
          ? colors.red500
          : styles.box.backgroundColor,
    };
  });

  // a funtion to increase a width of the box
  const handleBoxWidth = () => {
    // we can directly change the value of width like this
    // the sync of the value is managed by the useSharedValue hook
    width.value = withSpring(width.value + 50);
  };
  return (
    <HeaderLayout
      conatinerStyles={styles.content}
      title="Reanimated Example"
      handleBackPress={() => navigation.goBack()}>
      <TitleSubtitle
        title=""
        subTitle={`This is an example of how reanimated can be used for animation . \n\nWe are using reanimated 3 .`}
      />
      <View style={styles.content}>
        <Animated.View style={[styles.box, {width}, boxAnimatedStyle]} />
        <Button
          handlePress={handleBoxWidth}
          label="Click me"
          theme="Primary"
          customStyles={{
            root: {
              marginTop: 10,
            },
          }}
        />
      </View>
    </HeaderLayout>
  );
};

export default ReanimatedExample;
