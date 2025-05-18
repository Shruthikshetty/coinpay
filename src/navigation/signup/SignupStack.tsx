import {zodResolver} from '@hookform/resolvers/zod';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {Route} from '~/common/constants/navigation.constants';
import SignUpLanding from '~/journeys/signup';
import {
  customerSignupSchema,
  defaultSignupDetails,
} from '~/journeys/signup/signup-schema';

// initaialize the navigator
const SignupNavigator = createNativeStackNavigator();

// this stack contains all the scrren in sign up flow
const SignupStack = () => {
  // get all the methods from useForm hook
  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(customerSignupSchema),
    defaultValues: defaultSignupDetails,
  });

  return (
    <FormProvider {...methods}>
      <SignupNavigator.Navigator screenOptions={{headerShown: false}}>
        <SignupNavigator.Screen
          name={Route.SIGNUP_LANDING}
          component={SignUpLanding}
        />
      </SignupNavigator.Navigator>
    </FormProvider>
  );
};

export default SignupStack;
