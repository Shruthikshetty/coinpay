import {zodResolver} from '@hookform/resolvers/zod';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {Route} from '~/common/constants/navigation.constants';
import SignUpLanding from '~/journeys/signup';
import {customerRegisterSchema, defaultSignupDetails} from './signup-schema';
import SetPassword from '~/journeys/signup/set-password';
import AddEmail from '~/journeys/signup/add-email';
import AddHomeAddress from '~/journeys/signup/add-home-address';
import AddPersonalInfo from '~/journeys/signup/add-personal-info';
import CreatePin from '~/journeys/signup/create-pin';
import AccountSetup from '~/journeys/signup/setting-account';

// initialize the navigator
const SignupNavigator = createNativeStackNavigator();

// this stack contains all the screen in sign up flow
const SignupStack = () => {
  // get all the methods from useForm hook
  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(customerRegisterSchema),
    defaultValues: defaultSignupDetails,
  });

  return (
    <FormProvider {...methods}>
      <SignupNavigator.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Route.ADD_PERSONAL_INFO}>
        {/* @TODO Temp test change */}
        <SignupNavigator.Screen
          name={Route.SIGNUP_LANDING}
          component={SignUpLanding}
        />
        <SignupNavigator.Screen
          name={Route.SET_PASSWORD}
          component={SetPassword}
        />
        <SignupNavigator.Screen name={Route.ADD_EMAIL} component={AddEmail} />
        <SignupNavigator.Screen
          name={Route.ADD_HOME_ADDRESS}
          component={AddHomeAddress}
        />
        <SignupNavigator.Screen
          name={Route.ADD_PERSONAL_INFO}
          component={AddPersonalInfo}
        />
        <SignupNavigator.Screen name={Route.CREATE_PIN} component={CreatePin} />
        <SignupNavigator.Screen
          name={Route.ACCOUNT_SETUP}
          component={AccountSetup}
        />
      </SignupNavigator.Navigator>
    </FormProvider>
  );
};

export default SignupStack;
