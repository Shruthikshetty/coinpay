import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Route} from '~/common/constants/navigation.constants';
import Onboarding from '~/journeys/onboarding';
import PreLogin from '~/journeys/onboarding/login-signup-landing';

// initialaize the navigator
const OnbardingNavigator = createNativeStackNavigator();

// this is the scrack containing the oboarding flow
const OnbaordingStack = () => {
  return (
    <OnbardingNavigator.Navigator
      initialRouteName={Route.ONBOARDING}
      screenOptions={{headerShown: false}}>
      <OnbardingNavigator.Screen
        name={Route.ONBOARDING}
        component={Onboarding}
      />
      <OnbardingNavigator.Screen name={Route.PRE_LOGIN} component={PreLogin} />
    </OnbardingNavigator.Navigator>
  );
};

export default OnbaordingStack;
