import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Route} from '~/common/constants/navigation.constants';
import Onboarding from '~/journeys/onboarding';
import PreLogin from '~/journeys/onboarding/login-signup-landing';

// initialize the navigator
const OnboardingNavigator = createNativeStackNavigator();

// this is the stack containing the onboarding flow
const OnboardingStack = () => {
  return (
    <OnboardingNavigator.Navigator
      initialRouteName={Route.ONBOARDING}
      screenOptions={{headerShown: false}}>
      <OnboardingNavigator.Screen
        name={Route.ONBOARDING}
        component={Onboarding}
      />
      <OnboardingNavigator.Screen name={Route.PRE_LOGIN} component={PreLogin} />
    </OnboardingNavigator.Navigator>
  );
};

export default OnboardingStack;
