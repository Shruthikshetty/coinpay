import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Send from '~/journeys/send';
import {Route} from '~/common/constants/navigation.constants';

const SendStackNavigator = createNativeStackNavigator();

// this steps up the stack for the send journey
// this contains all the screens for the send journey
const SendStack = () => {
  return (
    <SendStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <SendStackNavigator.Screen name={Route.SEND_LANDING} component={Send} />
    </SendStackNavigator.Navigator>
  );
};

export default SendStack;
